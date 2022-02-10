import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/Entypo';

export default function CommonCostTypoPicker({ initialStatus, typoSelection }) {

    const [valueEdit, setValueEdit] = useState(initialStatus || '');

    let [fontsLoaded, error] = useFonts({
        'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (error) {
        console.error(error);
    }

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={{ marginTop: 10 }}>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                value={valueEdit}
                placeholder={{
                    fontSize: 15,
                    label: 'Selecciona el tipo de gasto',
                    value: '',
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
                    setValueEdit(value);
                    typoSelection(value);
                }}
                items={[
                    { label: 'Gasolina', value: 'GASOL' },
                    { label: 'Comida', value: 'FOOD' },
                    { label: 'Luz', value: 'LIGHT' },
                    { label: 'Otros', value: 'OTHER' }
                ]}
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
