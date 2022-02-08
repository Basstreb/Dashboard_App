import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import OffersScreen from '../screens/Offers';
import CreateOfferScreen from '../screens/Offer/CreateOffer';
import OfferDetailsScreen from '../screens/Offer/DataOfferDetails';
import EditOfferScreen from '../screens/Offer/EditOffer';

const Stack = createStackNavigator();

export default function OffersNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="MainOffers"
                component={OffersScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="CreateOffer"
                component={CreateOfferScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="EditOffer"
                component={EditOfferScreen}
                options={{ title: '', headerTrasparent: true }} />
            <Stack.Screen
                name="OfferDetails"
                component={OfferDetailsScreen}
                options={{ title: '', headerTrasparent: true }} />
        </Stack.Navigator>
    )
}
