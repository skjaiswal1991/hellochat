import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native';

class loginform extends Component {
  constructor(props) {
    super();
    this.state = {username:'sanjay'}
    
  }

  hendler = () =>{
      //alert(this.state.username);
      this.props.onCreate(this.state.username)
  }



  render() {
      const { username } = this.state;
    return (
      <View style={styles.container} >
            <TextInput name='username' value={username} style={styles.input} onChangeText={(text)=>this.setState({username:text})} placeholder="Enter the username"></TextInput>
              <TouchableOpacity style={styles.button} activeOpacity={0.7} title='Login' onPress={this.hendler} >
                <Text style={styles.text}>create</Text>
              </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex:2,
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
    button: {
      borderRadius: 4,   
      borderColor: 'green',
      backgroundColor: '#F88',
    },
    text: {
      textAlign:"center",
      fontSize: 18,
      padding: 12,
    },
}) 
export default loginform;
