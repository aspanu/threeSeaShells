/**
 * Provide the container which displays the next date which the user will be in
 * @flow
 */

import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class NextDate extends Component {

  constructor(props) {
    super(props);
    console.log("Props: ", props.data);
    this.state = {text: props.data};
  }

  render() {
    return <View>
      <Text>{this.props.name}</Text>
    </View>;
  }
}
