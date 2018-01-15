import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux'


import Loading from './Screens/Loading';
import Home from './Screens/Home';

const Routes = () => (
  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "loading" component = {Loading} hideNavBar={true} {...this.props} initial />
      <Scene key = "home" component = {Home} hideNavBar={true} panHandlers={null} />
    </Scene>
 </Router>
);

export default Routes

