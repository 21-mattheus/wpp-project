import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CadastroScreen from '../screens/Login/Cadastro';
import LoginScreen from '../screens/Login/Login';
import HomeWelcome from '../screens/Login/HomeWelcome';

const Stack = createStackNavigator();

//

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen 
                name='Login' 
                component={LoginScreen} 
                options={{headerShown: false}}
                ></Stack.Screen>

                <Stack.Screen 
                name='Cadastro' 
                component={CadastroScreen} 
                options={{headerShown: false}}
                ></Stack.Screen>

                <Stack.Screen 
                name='Home' 
                component={HomeWelcome} 
                options={{headerShown: false}}
                ></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;