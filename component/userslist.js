import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet } from 'react-native';

const data = ['sanjay','ajay','sunil'];
class UserList extends Component {
  constructor(props) {
    super();
    this.state = {
    };

  }

  render() {
    return (
      <View style={Styles.container} >
                <ListView datasource={(data)=><Text>{data}</Text>}>
                </ListView> 
      </View>
    );
  }
}


const Styles = StyleSheet.create({
    container: {
        flex:1,
        color:'white',
        paddingLeft:10,
        paddingRight:10,
       // justifyContent: 'space-between',
    },
    input:{
        borderColor:'gray',
        borderWidth:1,
        paddingLeft:10,
        height:40,
        marginBottom:10,
    },
    Button:{
       // paddingTop:10,
    }
}) 
export default UserList;
