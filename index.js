/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import App from './AppMain';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

PushNotification.configure({
    // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
  requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => App);
