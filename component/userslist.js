import React, { Component } from 'react';
//import {  Text,TextInput,Button,StyleSheet,FlatList } from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet,Header, Text, StatusBar,Button,TouchableOpacity } from 'react-native';
import { cos } from 'react-native-reanimated';
import { ListItem, Avatar } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { socket } from '../module/socket';
//import { SafeAreaView } from 'react-native-safe-area-context';


// const DATA = [
  
//     userName: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    

  
//     userName: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    
 
 
// ];
const Item = ({item,onPress,data}) =>(


  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.item}>{item}</Text>   
  </TouchableOpacity>
)
class UserList extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedId:'',
      Userlist:[],
      dd:[]
    };
    socket.emit('GetUserList',{txt:'userList',userid:'sanjay'})
    socket.on('listUser',(data)=>{       
        this.setState({Userlist:data.list})
    })

  }
  onPressHendler = (data) =>{
   // console.log("text click");
    this.props.navigation.navigate('Chat',{ thread: data })

}
 
  render() {
    const {selectedId,Userlist} = this.state;

  
    const renderItem = ({ item }) => {

     // console.log(item);
      //console.log('I am here!');

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
        
        <View style={{textaligh:'center'}}>
          <Text>Welcome12</Text>
        </View>
        <View style={styles.containerinner}>
        {Object.keys(Userlist).map((key,i)=>(

            <Item 
            item={key}
            data = {Userlist}
            onPress={() => this.props.navigation.navigate('Chat',{ thread: {username: key,id:Userlist[key]} }) }
            
            />
           
            
        )
         )}
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
