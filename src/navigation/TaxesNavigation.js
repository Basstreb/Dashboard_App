import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import TaxesSupportedScreen from '../screens/Taxes/TaxesSupported';
import TaxesRepercutedScreen from '../screens/Taxes/TaxesRepercuted';
import TaxesPaidScreen from '../screens/Taxes/TaxesPaid';
import TaxesCreationScreen from '../screens/Taxes/TaxesCreation';

const Stack = createStackNavigator();

export default function TaxesNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="SupportedTaxes"
                component={TaxesSupportedScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="RepercutedTaxes"
                component={TaxesRepercutedScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="PaidTaxes"
                component={TaxesPaidScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CreateTaxes"
                component={TaxesCreationScreen}
                options={{ title: '', headerTrasparent: true }} />
        </Stack.Navigator>
    )
}
