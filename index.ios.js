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
import { Container, Content, Button, CheckBox, List, ListItem, InputGroup, Input, Icon } from 'native-base';
import {Scene, Router, Actions} from 'react-native-router-flux';
//import {LoginPage} from './login';

class threeSeashells extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" component={LoginPage} title="Login"/>
        <Scene key="home" component={Home}/>
      </Scene>
    </Router>
  }
}
var globalText = "";
class LoginPage extends Component {

    constructor(props) {
       super(props);
       //this.state = {text: 'TEXT#123'};
     }
test() {
  //console.log("State", this.state);
  Actions.home(globalText);
}
render() {
    return (
        <View style={styles.container}>
            <Container>
              <Content>
                  <InputGroup style={styles.input}>
                    <Icon name='ios-person' />
                    <Input placeholder='NAME' onChangeText={(txt) => globalText = txt}/>
                  </InputGroup>

                  <Button style={styles.button} onPress={this.test}> Enter </Button>
                </Content>
            </Container>

          </View>
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
    if(this.state.text == "1") {
      return (
        <View style={styles.home}>
        <Container>
              <Content>

              <Text style={{fontSize: 30,textAlign: 'center'}}><Icon name='ios-trash' style={{ color: 'red'}}/> It's your duty day today!</Text>
                  <List>
                      <ListItem>
                          <CheckBox checked={true} />
                          <Text>Running dishwasher</Text>
                      </ListItem>
                      <ListItem>
                          <CheckBox checked={false} />
                          <Text>Cleaning coffe Machine</Text>
                      </ListItem>
                      <ListItem>
                          <CheckBox checked={false} />
                          <Text>Watering plants</Text>
                      </ListItem>
                      <ListItem>
                          <CheckBox checked={false} />
                          <Text>Cleaning Coffee System</Text>
                      </ListItem>
                  </List>
              </Content>
          </Container>
          </View>
      );
    } else if(this.state.text == "2") {
      return (
        <View style={styles.home}>
        <Container>
              <Content>

              <Text style={{fontSize: 30,textAlign: 'center'}}><Icon name='cog' style={{ color: 'green'}}/> It's not your duty day today!</Text>

              </Content>
          </Container>
          </View>
      );
    }
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
  home: {
    flex: 3,
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
