/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { Container, Content, Button, List, ListItem, InputGroup, Input, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';

var globalText = "";

export default class LoginComponent extends Component {

  buttonPress() {
    Actions.nextDate(globalText);
  }

  render() {
    return (
      <View style={styles.container}>
          <Container>
            <Content>
                <InputGroup style={styles.input}>
                  <Icon name='ios-person' />
                  <Input
                    placeholder='NAME'
                    onChangeText={(txt) => globalText = txt}/>
                </InputGroup>
                <Button style={styles.button} onPress={this.buttonPress}> Enter </Button>
              </Content>
          </Container>
        </View>
    );
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
