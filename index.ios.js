/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginComponent from './js/Login.js'
import NextDate from './js/NextDate.js'

class threeSeashells extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginComponent}
            title="Login Page" initial={true} />
          <Scene key="nextDate" component={NextDate}
            title="Your Next Date" />
        </Scene>
      </Router>
    );
  }

}

AppRegistry.registerComponent('threeSeashells', () => threeSeashells);
