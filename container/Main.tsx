import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {Feather as Icon} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';

interface MainProps {}

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MaterialTopTab = () => {
    return(
        <Tab.Navigator>
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
                title: 'Wpp',
                headerStyle:{
                  elevation: 0,
                },
                headerRight: () => {
                        return (
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <TouchableOpacity 
                                onPress={() => console.log('Procura')} 
                                style={{marginHorizontal: 5}}>
                                    <Icon name='search' size={26}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                onPress={() => console.log('Menu Iniciado')} 
                                style={{marginHorizontal: 5}}>
                                    <Icon name='more-vertical' size={26}></Icon>
                                </TouchableOpacity>
                            </View>
                        );
                },
              })}
              name="home" 
              component={MaterialTopTab}></Stack.Screen>
          </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {}
});
