import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { deepOrangeA400 } from 'material-ui/styles/colors';

export default class MenuIconFactory {
  static build (iconName) {
    switch (iconName) {
      case 'home':
        return <FontIcon className='fa fa-home' hoverColor={deepOrangeA400} />;
      case 'dashboard':
        return <FontIcon className='fa fa-dashboard' hoverColor={deepOrangeA400} />;
      case 'users':
        return <FontIcon className='fa fa-users' hoverColor={deepOrangeA400} />;
      case 'subscriptions':
        return <FontIcon className='fa fa-share-alt' hoverColor={deepOrangeA400} />;
      case 'services':
        return <FontIcon className='fa fa-server' hoverColor={deepOrangeA400} />;
      case 'costs':
        return <FontIcon className='fa fa-euro' hoverColor={deepOrangeA400} />;
      case 'configuration':
        return <FontIcon className='fa fa-gears' hoverColor={deepOrangeA400} />;
      case 'logout':
        return <FontIcon className='fa fa-sign-out' hoverColor={deepOrangeA400} />;
      default:
        return <FontIcon className='fa fa-question' hoverColor={deepOrangeA400} />;
    }
  }
}
