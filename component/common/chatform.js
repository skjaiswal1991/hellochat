import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

class ChatForm extends Component {
  constructor(props) {
    super();
    this.state = {username:'sanjay',msg:''}
    
  }

  hendler = (e) =>{
     console.log(this.props.UserData);
      let msg = {msg:this.state.msg,username:this.props.UserData.username,userId:this.props.UserData.id}
      this.props.Sendmessage(msg);
      this.setState({msg:''});
  }



  render() {
      const { username,msg } = this.state;
      console.log(msg);
    return (
      <View style={styles.container} >
            <View style={styles.innercontainer}>
                <TextInput style={styles.input} value={this.state.msg}  id='msg' onChangeText={(text)=>this.setState({msg:text})}></TextInput>
                <Button title="send" style={styles.button} onPress={this.hendler}  />    
            </View>            
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    input:{
        borderColor:'gray',
        borderWidth:1,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:4,
        marginBottom:2,
        width:260,
        height:40,       
        
    },
    button: {
      borderRadius: 4,
      paddingEnd:2,  
      borderColor: 'green',
      backgroundColor: '#F88',
    },
    text: {
      textAlign:"center",
      fontSize: 18,
      padding: 12,
    },
    innercontainer:{
        flexDirection: 'row',
        width:100
    },
}) 
export default ChatForm;
