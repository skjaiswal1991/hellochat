import React, { Component } from 'react';
//import {  Text,TextInput,Button,StyleSheet,FlatList } from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet,Header, Text, StatusBar,Button,TouchableOpacity,AsyncStorage } from 'react-native';
import { cos } from 'react-native-reanimated';
import { ListItem, Avatar } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { socket } from '../module/socket';
import {_storeData,_retrieveData} from './common/storage';

const Item = ({item,onPress,data}) =>(


  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.item}>{item}</Text>   
  </TouchableOpacity>
)
class UserList extends Component {
  constructor(props) {
    super();
    this.state = {
      username:'',
      selectedId:'',
      name:'',
      Userlist:[],
      dd:[]
    };
    socket.emit('GetUserList',{txt:'userList',userid:'sanjay'})
    socket.on('listUser',(data)=>{
     
        this.setState({Userlist:data.list})

    })
    

    _retrieveData('username').then((result)=> {
     // console.log(result)
      this.setState({name:result})
    })

  }
  onPressHendler = (data) =>{
   // console.log("text click");
    this.props.navigation.navigate('Chat',{ thread: data })
  }
 
  render() {
    const {selectedId,Userlist,name} = this.state;
    const renderItem = ({ item }) => {
        const backgroundColor = item.username === selectedId ? "#6e3b6e" : "#f9c2ff";
      return(
    
        <Item 
          item={item}
        
          onPress={() => this.props.navigation.navigate('Chat',{ thread: 'sanjaytest' }) }
          style={{backgroundColor}}
        />
    )};

    //console.log(Userlist);
    return (
      <SafeAreaView style={styles.container}>
        
        <View>
        <Text>Welcome  {name}</Text>
        </View>
        <View style={styles.containerinner}>
        {Object.keys(Userlist).map((key,i)=>{
            console.log(key);
            console.log(name);
            if(key !== name){
             return (
              <Item 
                key={i}
                item={key}
                data = {Userlist}
                onPress={() => this.props.navigation.navigate('Chat',{ thread: {username: key,id:Userlist[key]} }) }            
                />
            ) }    
        } )}
         </View>
         {/* <FlatList
          data={Userlist}
          renderItem={renderItem}
          keyExtractor={item => item.username}
          extraData={selectedId}
        /> */}

        
      </SafeAreaView>
      
    //   <View style={styles.container}>
    //   <FlatList
    //     data={data}
    //     renderItem={(item,key) => <Text style={styles.item}>{key}</Text>}
    //   />
    // </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight|| 10,
      // marginTop:100,
      justifyContent: 'space-between'
      
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
    },
    containerinner:{
      flex:2,
    },
    item: {
      padding: 10,
      marginVertical: 3,
      backgroundColor:'yellow'      
    },
}) 
export default UserList;
