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

class threeSeashells extends Component {

  // _signIn() {
  //
  //   console.log("- - - - - - - - > _SignIn ")
  //
  //   GoogleSignin.signIn().then((user) => {
  //     console.log(user);
  //     this.setState({user: user})
  //   })
  //   .catch((err) => {
  //     console.log('WRONG SIGN-IN', err);
  //   })
  //   .done();
  // }

  render() {

    console.log("- - - > Just a test message")

    return (


        <View style={styles.container}>


            <Container>
              <Content>
                  <InputGroup style={styles.input}>
                    <Icon name='ios-person' />
                    <Input placeholder='NAME' />
                  </InputGroup>

                  <Button style={styles.button}> Enter </Button>
                </Content>
            </Container>
          </View>
            /* <GoogleSigninButton
          style={{width: 312, height:48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn.bind(this)}
        />*/

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

AppRegistry.registerComponent('threeSeashells', () => threeSeashells);
