import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Loginform from './common/loginform'
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.logo}>
           <Image style={Styles.Image} source={{uri:'https://img.favpng.com/25/15/11/telephone-call-dialer-mobile-phones-email-png-favpng-E0GyiLmZyrPwdXu8yeTuiHLM7.jpg',}}></Image>
        </View>
        <View style={Styles.innercontainer}>
          <Loginform />
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
