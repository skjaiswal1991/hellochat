import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native';
import { socket } from '../module/socket';
import ChatForm from './common/chatform';

const msgData = {
      msg:[{'sanjay':'Hello'},{'ajay':'how are you Sanjay'}],
      check:[{'asd':'asdas'}]
}

class Chat extends Component {
  constructor(props) {
    super();
    this.state = {
                  username:'sanjay',
                  msg:msgData.msg,
                  check:[{'asd':'asdas'}],
                  sendUser: props.route.params.thread
                }
    console.log('ip');
    console.log(props.route.params.thread);
  }

  hendler = () =>{
      //alert(this.state.username);
      this.props.onCreate(this.state.username)
  }

  messHendler = (data) =>{

    socket.emit('PrivateMsg',{data})
     console.log(data);
    //let msgd = this.state.msg;

    this.setState({msg:[...this.state.msg,data]});

    console.log('Msg data');
    console.log(this.state.check);
    setTimeout(()=>{
      let fafa = {'ajay':'ok'}
      this.setState({msg:[...this.state.msg,fafa]});
    },300)
   
  }


  render() {
      const { username,msg } = this.state;
      console.log(msg);
    return (

      <View style={styles.container} >
            
            <View style={styles.message}>
                {msg.map((msg,i)=>(
                  <>
                    {msg['sanjay'] ? (
                        <View>
                          <Text style={styles.text1}>{msg['sanjay']}</Text>
                        </View>
                    ): ( 
                      <View>
                        <Text style={styles.text2}>{msg['ajay']}</Text>
                      </View>
                    )}
                  </>
                ))}                
            </View>
            {/* <View style={styles.message}>
                {msgData.msg.map((msg,i)=>(
                  <Text style={styles.text}>{msg}</Text>
                ))}                
            </View> */}
            <View style={styles.form}>
                <ChatForm Sendmessage={this.messHendler} UserData={this.state.sendUser}/>
            </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex:1,        
        justifyContent: 'space-between', 
             
    },
    
    messageOther:{
      flex:1,
      // alignItems:'flex-end',
        
    },

    message:{
       flex:1,    
        flexDirection: 'column',
        // height:20  ,
        // justifyContent: 'flex-end'
    },

    text2:{
      //textAlign: 'left',
    },
    test1:{
     width:300,
     borderColor:'gray',
     borderWidth:1,
     textAlign: 'right',
    }  
    
    
}) 
export default Chat;
