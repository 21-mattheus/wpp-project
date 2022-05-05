import * as React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CadastroScreen from '../screens/Login/Cadastro';
import LoginScreen from '../screens/Login/Login';

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                name='home' 
                component={LoginScreen} 
                options={{headerShown: false}}
                ></Stack.Screen>

                <Stack.Screen 
                name='cadastro' 
                component={CadastroScreen} 
                options={{headerShown: false}}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;