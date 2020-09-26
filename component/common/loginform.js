import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet } from 'react-native';

class loginform extends Component {
  constructor(props) {
    super();
    this.state = {username:'sanjay'}
    
  }

  hendler = () =>{
      alert(this.state.username);
      
      //this.props.history.push('/userlist');
  }



  render() {
      const { username } = this.state;
    return (
      <View style={Styles.container} >
            <TextInput name='username' value={username} style={Styles.input} onChangeText={(text)=>this.setState({username:text})} placeholder="Enter the username"></TextInput>
            <Button style={Styles.Button} title='Login' onPress={this.hendler} />
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
export default loginform;
