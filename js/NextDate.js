/**
 * Provide the container which displays the next date which the user will be in
 * @flow
 */

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NextDate extends Component {

  constructor(props) {
    super(props);
    console.log("Props: ", props.data);
    this.state = {text: props.data};
    console.log("This.state: ", this.state);
  }

  render() {
    return <View style={styles.container} >
      <Text> WHAT THE FUCK </Text>
      <Text>{this.state.text}</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 150
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: 250
  },
  button: {
    flex: 1,

    marginTop: 5
  }
});
