import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Loginform from './common/loginform';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { socket } from '../module/socket';
//import socket  from '../module/socket';

// console.log(socket);
class login extends Component {
  constructor(props) {
    super(props);
    this.state = { count:0, username:'',status:false };
    console.log(this.props);
    socket.on('Welcome',(data) =>{
      console.log(data);
    })

    
    //socket.emit('sendfromclient',{txt:"sanjay"})
    // socket.emit('user',{text:"sanjay"})
  }
  

  loginhendler = (e) =>{ 
    //console.log(this.props);
      console.log(e);
      socket.emit('user',{txt:e})
      socket.on('user',(data)=>{
        console.log(data);
        
        if(data.status ==='success'){
            //alert(data.txt);
            this.setState({status:true});

            this.props.navigation.navigate('List'); 
        }else{
            alert(data.txt);
        }
    })
      this.setState({username:e});
      console.log(this.state.status);
      //console.log(socket);
     // socket.emit('user',{text:e.username})
  }

  loginSubmitHendler =(e)=>{
      console.log(socket);
      console.log(e);
      console.log('JKSADSDF');

      this.setState({username:e});
      
      
         
  }
  render() {
    const { count } = this.state;
    return (
      <View style={Styles.container}>
        <View style={Styles.logo}>
           <Image style={Styles.Image} source={{uri:'https://img.favpng.com/25/15/11/telephone-call-dialer-mobile-phones-email-png-favpng-E0GyiLmZyrPwdXu8yeTuiHLM7.jpg',}}></Image>
        </View>
        <View style={Styles.innercontainer}>          
          <Loginform  onCreate={(e)=>this.loginhendler(e)} DataUpdate={(e)=>this.loginhendler(e)} />          
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
      flex:1,
      color:'white',
      justifyContent: 'space-between',
  },
 
  innercontainer:{
    flex:2
  },
  Image:{
    height:100,
    width:100,
  },
  logo:{
      flex:2,
      alignItems: 'center',
      justifyContent: 'center',
  },
})
export default login;
