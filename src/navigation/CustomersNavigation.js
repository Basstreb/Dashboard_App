import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomersScreen from '../screens/Customers';
import CreateCustomerScreen from '../screens/Customer/CreateCustomer';
import CustomerDetailsScreen from '../screens/Customer/DataCustomerDetails';
import EditCustomerScreen from '../screens/Customer/EditCustomer';

const Stack = createStackNavigator();

export default function CustomersNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="MainCustomers"
                component={CustomersScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CreateCustomer"
                component={CreateCustomerScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="EditCustomer"
                component={EditCustomerScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CustomerDetails"
                component={CustomerDetailsScreen}
                options={{ title: '', headerTrasparent: true }} />
        </Stack.Navigator>
    )
}