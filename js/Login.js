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
  View,
  AsyncStorage,
} from 'react-native';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { Container, Content, Button, List, ListItem, InputGroup, Input, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class LoginComponent extends Component {

  constructor(props) {
    super(props);
    console.log("Saving shit");
    this.goFuckYourself();
    console.log("Saved shit!");
  }

  async goFuckYourself() {
    try {
      await AsyncStorage.setItem("gerhard", "1");
      await AsyncStorage.setItem("gareth", "1");
      await AsyncStorage.setItem("michael", "2");
      await AsyncStorage.setItem("anton", "3");
      await AsyncStorage.setItem("gesa", "2");
      await AsyncStorage.setItem("uwe", "2");
      await AsyncStorage.setItem("marcin", "3");
      await AsyncStorage.setItem("adrian", "2");
    } catch (error) {
      console.log("Be sadface.");
    }
  }

  async buttonPress() {
    var userState = await AsyncStorage.getItem(this.state.inputName);
    if(userState == null) {
      userState = '3';
    }
    Actions.nextDate(userState);
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
                    onChangeText={(txt) => this.setState({inputName: txt})}/>
                </InputGroup>
                <Button
                  style={styles.button}
                  onPress={this.buttonPress.bind(this)}> Enter </Button>
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
