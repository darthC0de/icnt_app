import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';

import Main from './pages/main'

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen
                    name="Main"
                    component={Main}
                />
            </Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
    );
}
