/**
 * Provide the container which displays the next date which the user will be in
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {  Text,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  CheckBox,
} from 'native-base';

export default class NextDate extends Component {

  constructor(props) {
    super(props);
    console.log("Props: ", props.data);
    this.state = {userId: props.data};
  }

  render() {
    console.log("UserId: ", this.state.userId);
    if(this.state.userId == "1") {
      console.log("We are about to render!!!!!!");
     return (
       <View style={styles.home}>
         <Container>
           <Content>
             <Text style={{fontSize: 30,textAlign: 'center'}}>
               <Icon name='ios-trash' style={{ color: 'red'}}/> It's your duty day today!
             </Text>
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
   } else if (this.state.userId == "2") {
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
