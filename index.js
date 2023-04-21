/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import AppLogin from './AppLogin';
import GeneralUsage from './GeneralUsage';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => AppLogin);
AppRegistry.registerComponent(appName, () => GeneralUsage);
