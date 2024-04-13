import React from 'react';
import MainStack from "./MainStack";
import Main from "./Main";
import MainCamera from "./MainCamera";
import Statist from "./Statist";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{ headerShown: false }}
                />
             <Stack.Screen 
                name='MainStack'
                component={MainStack}
                options={{ headerShown: false }}
                />  
             <Stack.Screen 
                name='MainCamera'
                component={MainCamera}
                options={{ headerShown: false }}
                />  
            <Stack.Screen 
                name='Statist'
                component={Statist}
                options={{ headerShown: false }}
                />   
    
        </Stack.Navigator>
    </NavigationContainer>
}