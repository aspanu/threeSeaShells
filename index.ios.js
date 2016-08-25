/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// <<<<<<< HEAD
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// //import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
// import { Container, Content, Button, CheckBox, List, ListItem, InputGroup, Input, Icon } from 'native-base';
// import {Scene, Router, Actions} from 'react-native-router-flux';
// //import {LoginPage} from './login';
// =======
import { AppRegistry, NavigatorIOS } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginComponent from './js/Login.js'
import NextDate from './js/NextDate.js'
// >>>>>>> e554d1a4e5629a1590ca257f9a644f2d8b0e1939

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

// >>>>>>> e554d1a4e5629a1590ca257f9a644f2d8b0e1939
AppRegistry.registerComponent('threeSeashells', () => threeSeashells);
