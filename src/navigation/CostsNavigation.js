import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import CommonCostsScreen from '../screens/Costs/CommonCosts';
import StaffCostsScreen from '../screens/Costs/StaffCosts';
import DataCommonCostDetailsScreen from '../screens/Costs/DataCommonCostDetails';
import CreateCommonCostScreen from '../screens/Costs/CreateCommonCost';

const Stack = createStackNavigator();

export default function CostsNavigation() {

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="CommonCosts"
                component={CommonCostsScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="StaffCosts"
                component={StaffCostsScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CommonCostsDetails"
                component={DataCommonCostDetailsScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CreateCommonCost"
                component={CreateCommonCostScreen}
                options={{ title: '', headerTrasparent: true }} />
        </Stack.Navigator>
    )
}