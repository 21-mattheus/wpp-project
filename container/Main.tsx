import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, StackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {Feather as Icon} from '@expo/vector-icons';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import ChatRoom from '../screens/ChatRoom/ChatRoomScreen';
import ChatRoomScreen from '../screens/ChatRoom/ChatRoomScreen';
import Contacts from '../screens/Contacts/Contacts';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
//import { Camera } from '../screens/CameraScreen/CameraScreen';
//import Login from '../screens/Login/Login';


interface MainProps {}

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export type MatrimonyTabParamList = {
  chats: undefined;
  status: undefined;
  calls: undefined;
  camera: undefined;
};

export type WhatsAppStackParamList = {
  home: undefined;
};

export type combineTabWithStackProps<
  T extends keyof MatrimonyTabParamList
> = CompositeNavigationProp<
  MaterialTopTabNavigationProp<MatrimonyTabParamList, T>,
  StackNavigationProp<WhatsAppStackParamList>
>;

const MaterialTopTab = () => {
    return(
        <Tab.Navigator
          tabBarOptions={{
            style:{backgroundColor: 'teal'},
            activeTintColor: '#fff',
            labelStyle: {fontWeight: 'bold'},
            indicatorStyle: {backgroundColor: '#fff'}
          }}
        >
            <Tab.Screen name="camera" options={{
              tabBarLabel: () => (
                <View>
                  <Icon name='camera' size={24} color={'#fff'}></Icon>
                </View>
              )
            }} component={CameraScreen}></Tab.Screen>
            <Tab.Screen name="conversa" component={Chats}></Tab.Screen>
            <Tab.Screen name="status" component={Status}></Tab.Screen>
            <Tab.Screen name="chamadas" component={Calls}></Tab.Screen>
        </Tab.Navigator>
    )
}

const Main = ({}: MainProps) => {
  return (
    
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              options={({navigation, route}) => ({
                title: 'Menssager',
                headerTintColor: '#fff',
                headerStyle:{
                  elevation: 0,
                  backgroundColor: 'teal',
                  color: '#fff',
                },
                headerRight: () => {
                        return (
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <TouchableOpacity 
                                onPress={() => console.log('Procura')} 
                                style={{marginHorizontal: 5}}>
                                    <Icon name='search' size={26} color={'#fff'}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                onPress={() => console.log('Menu Iniciado')} 
                                style={{marginHorizontal: 5}}>
                                    <Icon name='more-vertical' size={26} color={'#fff'}></Icon>
                                </TouchableOpacity>
                            </View>
                        );
                },
              })}
              name="home" 
              component={MaterialTopTab}
              ></Stack.Screen>
              
              <Stack.Screen
              name="chatRoom"
              component={ChatRoomScreen}
              options={{ title: "Chat Room"}}
              ></Stack.Screen>

              <Stack.Screen
              name="contatos"
              component={Contacts}
              options={{ title: "Selecione um contato"}}
              ></Stack.Screen>

              
                   
          </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {}
});
