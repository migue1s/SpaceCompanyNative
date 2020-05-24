/**
 * @format
 */

import {
  AppRegistry
} from 'react-native';
import App from './src';
import {
  name as appName
} from './app.json';

// Required one-time installs
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);