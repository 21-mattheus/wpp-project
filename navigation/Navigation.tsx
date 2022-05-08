import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CadastroScreen from '../screens/Login/Cadastro';
import LoginScreen from '../screens/Login/Login';
import Main from '../container/Main';

const Stack = createStackNavigator();

//

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen 
                name='login' 
                component={LoginScreen} 
                options={{headerShown: false}}
                ></Stack.Screen>

                <Stack.Screen 
                name='cadastro' 
                component={CadastroScreen} 
                options={{headerShown: false}}
                ></Stack.Screen>

                <Stack.Screen 
                name='main' 
                component={Main} 
                options={{headerShown: false}}
                ></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;