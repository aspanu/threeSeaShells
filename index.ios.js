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

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Props: ", props.data);
    this.state = {text: props.data};
  }

  render() {
    return (
        <View style={styles.container}>
            <Text>{this.state.text}</Text>
          </View>
    );
  }

}

AppRegistry.registerComponent('threeSeashells', () => threeSeashells);
