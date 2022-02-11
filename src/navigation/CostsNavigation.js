import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import CommonCostsScreen from '../screens/Costs/CommonCosts';
import StaffCostsScreen from '../screens/Costs/StaffCosts';
import DataCommonCostDetailsScreen from '../screens/Costs/DataCommonCostDetails';
import CreateCommonCostScreen from '../screens/Costs/CreateCommonCost';
import EditCommonCostScreen from '../screens/Costs/EditCommonCost';
import DataStaffCostDetailsScreen from '../screens/Costs/DataStaffCostDetails';
import CreateStaffCostScreen from '../screens/Costs/CreateStaffCost';
import EditStaffCostScreen from '../screens/Costs/EditStaffCost';

const Stack = createStackNavigator();

export default function CostsNavigation() {

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="CommonCosts"
                component={CommonCostsScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CommonCostsDetails"
                component={DataCommonCostDetailsScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CreateCommonCost"
                component={CreateCommonCostScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="EditCommonCost"
                component={EditCommonCostScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="StaffCosts"
                component={StaffCostsScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="StaffCostsDetails"
                component={DataStaffCostDetailsScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CreateStaffCosts"
                component={CreateStaffCostScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="EditStaffCosts"
                component={EditStaffCostScreen}
                options={{ title: '', headerTrasparent: true }} />
        </Stack.Navigator>
    )
}