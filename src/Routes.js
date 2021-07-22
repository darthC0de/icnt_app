import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Services from './pages/Services';
import Service from './pages/Service';
import Login from './pages/Login';
import Company from './pages/Company';


const Stack = createStackNavigator();
  
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Services" component={Services} options={{headerShown:false}} />
              <Stack.Screen name="Service" component={Service} options={{headerShown:false}} />
              <Stack.Screen name="Company" component={Company} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
