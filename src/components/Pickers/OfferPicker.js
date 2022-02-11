import { Platform, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { bringAllCustomersApi } from '../../api/CustomersApi';
import Icon from 'react-native-vector-icons/Entypo';
import { normalizeOffers } from '../../utils/Normalize';
import { bringAllOffersApi } from '../../api/OffersApi';

export default function OfferPicker({ offerSelection }) {
    const [offers, setOffers] = useState();
    const items = normalizeOffers(offers);

    useEffect(() => {
        (async () => {
            try {
                const response = await bringAllOffersApi();
                setOffers(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])

    let [fontsLoaded, error] = useFonts({
        'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (error) {
        console.error(error);
    }

    if (!fontsLoaded || !offers) {
        return <AppLoading />
    }

    return (
        <View style={{marginTop: 15}}>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{
                    fontSize: 15,
                    label: 'Selecciona una oferta',
                    value: 'asdf',
                    color: '#696767',
                    fontFamily: 'Poppins-Regular',
                }}
                style={{
                    placeholder: {
                        borderBottomColor: '#8A8888',
                        borderBottomWidth: 1,
                        color: '#696767',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 15,
                        marginBottom: -10,
                        marginHorizontal: 50,
                        marginTop: 20,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                    },
                    inputIOS: {
                        borderBottomColor: '#8A8888',
                        borderBottomWidth: 1,
                        color: '#696767',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 15,
                        marginBottom: -10,
                        marginHorizontal: 50,
                        marginTop: 20,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                    },
                    inputAndroid: {
                        borderBottomColor: '#8A8888',
                        borderBottomWidth: 1,
                        color: '#696767',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 15,
                        marginBottom: -10,
                        marginHorizontal: 50,
                        marginTop: 20,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                    }
                }}
                Icon={() => {
                    return <Icon name="chevron-down" size={40} color="#696767" style={styles.icon} />;
                }}
                onValueChange={(value) => {
                    offerSelection(value.id, value.offerName);
                }}
                items={items}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        right: 45,
        top: 15,
    }
})
