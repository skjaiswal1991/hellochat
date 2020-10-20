import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screen added
import Login from './component/login';
import UserList from './component/userslist';  
import Chat from './component/chat';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />        
        <Stack.Screen name="List" component={UserList} options={{headerShown: false}} />
        <Stack.Screen name="Chat" component={Chat} options={({route})=>({title:route.params.thread.username})} />
        {/* options={({ route }) => ({ title: route.params.thread.name })} */}
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F49EE',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
