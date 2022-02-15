import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GraphicsScreen from '../screens/Graphics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextPoppins } from '../utils/CustomFonts';
import ClientIcon from '../utils/svg/ClientsSVG';
import OffersSVG from '../utils/svg/OffersSVG';
import CostsSVG from '../utils/svg/CostsSVG';
import IvaSVG from '../utils/svg/IvaSVG';
import GraphsSVG from '../utils/svg/GraphsSVG';
import CustomersNavigation from './CustomersNavigation';
import OffersNavigation from './OffersNavigation';
import TaxesNavigation from './TaxesNavigation';
import CostsNavigation from './CostsNavigation';
import GraphicsNavigation from './GraphicsNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {

    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName='Clients'
            height={100}
            tabBarOptions={{
                labelStyle: {
                    fontSize: 14,
                },
                style: {
                    height: 80 + insets.bottom,
                },
                iconStyle: {
                    marginTop: 15,
                },
                activeTintColor: '#0078B4',
            }}>
            <Tab.Screen
                name="Clients"
                component={CustomersNavigation}
                options={{
                    tabBarLabel: ({ color, size }) => renderText('Clientes', color, size),
                    tabBarIcon: ({ color }) => (
                        <ClientIcon fill={color} />
                    ),
                }} />
            <Tab.Screen
                name="Oferts"
                component={OffersNavigation} Î
                options={{
                    tabBarLabel: ({ color, size }) => renderText('Ofertas', color, size),
                    tabBarIcon: ({ color }) => (
                        <OffersSVG fill={color} />
                    ),
                }} />
            <Tab.Screen
                name="Gastos"
                component={CostsNavigation}
                options={{
                    tabBarLabel: ({ color, size }) => renderText('Gastos', color, size),
                    tabBarIcon: ({ color }) => (
                        <CostsSVG fill={color} />
                    ),
                }} />
            <Tab.Screen
                name="IVA"
                component={TaxesNavigation}
                options={{
                    tabBarLabel: ({ color, size }) => renderText('IVA', color, size),
                    tabBarIcon: ({ color }) => (
                        <IvaSVG fill={color} />
                    ),
                }} />
            <Tab.Screen
                name="Graphics"
                component={GraphicsNavigation}
                options={{
                    tabBarLabel: ({ color, size }) => renderText('Gráficas', color, size),
                    tabBarIcon: ({ color }) => (
                        <GraphsSVG fill={color} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

function renderText(text, color, size) {
    return (
        <TextPoppins
            medium={true}
            style={{
                color: color,
                fontSize: size,
                marginBottom: 10,
            }}>
            {text}
        </TextPoppins>
    )
}