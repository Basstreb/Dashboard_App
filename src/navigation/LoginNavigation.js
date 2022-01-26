import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import NavigationScreen from '../navigation/Navigation';

const Stack = createStackNavigator();

export default function LoginNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: '', headerShown: false }} />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: '', headerTransparent: true }} />
            <Stack.Screen 
                name="Navigation"
                component={NavigationScreen}
                options={{ title: '', headerShown: false }} />
        </Stack.Navigator>
    )
}