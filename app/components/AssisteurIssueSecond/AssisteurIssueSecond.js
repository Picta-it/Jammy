import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

export default class AssisteurIssueSecond extends React.Component {
  static propTypes = {
  };

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.onValidation({});
    }
  }

  render () {
    return (
      <Paper className='page' style={{ marginLeft: '10px' }}>
        2
      </Paper>
    );
  }
}
