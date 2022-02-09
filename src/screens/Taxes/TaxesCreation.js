import { View, StyleSheet, Platform } from 'react-native';
import React, { useEffect } from 'react';
import { TextPoppins } from '../../utils/CustomFonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomerCreationForm from '../../components/Forms/CustomerCreationForm';
import TaxesCreationForm from '../../components/Forms/TaxesCreationForm';

export default function TaxesCreation(props) {

    const { navigation } = props;
    const totalTaxes = props.route.params;

    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                height: 100,
                backgroundColor: '#FFF',
            },
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    size={30}
                    color="#000000"
                    style={{ marginLeft: 20 }}
                    onPress={() => navigation.navigate('PaidTaxes')} />
            ),
            headerTitle: () => (
                <TextPoppins regular style={{ fontSize: 20, letterSpacing: 1, marginRight: Platform.OS === 'android' ? 0 : 160 }}>Pagar</TextPoppins>
            ),
        })
    }, [navigation])

    return (
        <View style={styles.bg}>
            <TextPoppins semiBold style={styles.title}>Total acumulado: {totalTaxes && totalTaxes.toFixed(2)}€</TextPoppins>
            <TaxesCreationForm />
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFF',
        height: '100%',
    },
    title: {
        fontSize: 22,
        letterSpacing: 1,
        marginTop: 40,
        marginLeft: 20,
    }
});
