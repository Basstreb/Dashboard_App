import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomersScreen from '../screens/Customers';

const Stack = createStackNavigator();

export default function ClientsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={CustomersScreen}
                options={{ title: '', headerShown: false }} />
        </Stack.Navigator>
    )
}