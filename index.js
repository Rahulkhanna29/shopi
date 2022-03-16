/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler'
import {name as appName} from './app.json';
import DetailScreen from './Components/DetailScreen';
AppRegistry.registerComponent(appName, () =>App);
