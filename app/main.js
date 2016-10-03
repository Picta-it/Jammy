import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import App from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo800, deepOrangeA400 } from 'material-ui/styles/colors';

injectTapEventPlugin();

// ========================================================
// Store Instantiation
// ========================================================
const store = createStore();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo800,
    accent1Color: deepOrangeA400
  }
});

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('mount');

let render = () => {
  const routes = require('./routes/index').default(store);

  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <App store={store} routes={routes} />
    </MuiThemeProvider>,
    MOUNT_NODE
  );
};

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp();
      } catch (error) {
        renderError(error);
      }
    };

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}

// ========================================================
// Go!
// ========================================================
render();
