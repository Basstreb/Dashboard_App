import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GraphicsScreen from '../screens/Graphics';

const Stack = createStackNavigator();

export default function GraphicsNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="MainGraphics"
                component={GraphicsScreen}
                options={{ title: '', headerTrasparent: true }} />
        </Stack.Navigator>
    )
}