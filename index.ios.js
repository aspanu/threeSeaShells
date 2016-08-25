/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import {LoginComponent} from './js/Login.js'
import {NextDate} from './js/NextDate.js'

class threeSeashells extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" component={LoginComponent}>
          <Scene key="login" component={LoginComponent}
            title="Login" initial={true}/>
          <Scene key="nextDate" component={NextDate} title="NextDate"/>
        </Scene>
      </Router>
    )
  }

}

AppRegistry.registerComponent('threeSeashells', () => threeSeashells);
