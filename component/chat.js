import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,TouchableHighlight,AsyncStorage } from 'react-native';
import { socket } from '../module/socket';
import ChatForm from './common/chatform';
import {_storeData,_retrieveData} from './common/storage';

const msgData = {
      msg:[{'sanjay':'Hello'},{'ajay':'how are you Sanjay'}],
      check:[{'asd':'asdas'}]
}

class Chat extends Component {
  constructor(props) {
    super();
    this.state = {
                  username:'',
                  senderID:'',
                  msg:[],
                  reciveMsgUser:'',
                  check:[{'asd':'asdas'}],
                  reciverID: props.route.params.thread
                }
    console.log('ip');
    console.log(props.route.params.thread);

    _retrieveData('username').then(uname=>{
        this.setState({username:uname})
    })
    _retrieveData('userID').then(uid=>{
        this.setState({senderID:uid})
    })
    console.log(this.state.username);
    socket.on('privateRecive',(data)=>{
      console.log(data);
      this.update_msg(data.data.sendData.sender.username,data.data.sendData.msg)
    })
  }

  update_msg = (id,msg) =>{

    var newMsg = this.state.msg;
    newMsg.push({[id]:msg})
    this.setState({msg:newMsg})
  }

  
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // We have data!!
        // console.log(value);
        this.setState({senderID:value})
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  
 
  hendler = () =>{
      //alert(this.state.username);
      this.props.onCreate(this.state.username)
  }

  messHendler = (data) =>{
    console.log(data);
    const { username,senderID,reciverID} = this.state;
    var sendData  = {msg:data.msg,sender:{username,senderID},reiverId:reciverID}
    this.update_msg(username,data.msg)
    socket.emit('PrivateMsg',{sendData})

    //  console.log(data);
    //let msgd = this.state.msg;

    // this.setState({msg:[...this.state.msg,data]});

    // console.log('Msg data');
    // console.log(this.state.check);
    // setTimeout(()=>{
    //   let fafa = {'ajay':'ok'}
    //   this.setState({msg:[...this.state.msg,fafa]});
    // },300)
   
  }


  render() {
      const { username,msg,reciverID,senderID } = this.state;
      console.log(msg);
    return (

      <View style={styles.container} >
            
            <View style={styles.message}>
                {msg.map((msg,i)=>(
                  <>
                    {msg[reciverID.username] ? (
                        <View>
                          <Text style={styles.text1}>{msg[reciverID.username]}</Text>
                        </View>
                    ): ( 
                      <View >
                        <Text style={styles.text2}>{msg[username]}</Text>
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
                <ChatForm Sendmessage={this.messHendler} UserData={this.state}/>
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
      alignItems:'flex-end',
        
    },

    message:{
       flex:1,    
        flexDirection: 'column',
        // height:20  ,
        //justifyContent: 'flex-end'
    },

    text2:{
      //textAlign: 'end',
    },
    test1:{
     width:300,
     borderColor:'gray',
     borderWidth:1,
     textAlign: 'right',
    }  
    
    
}) 
export default Chat;
