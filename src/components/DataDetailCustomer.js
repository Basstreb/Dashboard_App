import { View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextPoppins } from '../utils/CustomFonts';

export default function DataDetailCustomer({ customer }) {
    return (
        <View style={styles.detailsContainer}>
            <View>
                <TextPoppins light style={styles.text}>Nombre de la compañia</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{customer.companyName}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Representante</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{customer.managerName}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Cargo</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{customer.managerCharge}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Teléfono</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{customer.phoneNumber}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>CIF</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{customer.cif}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Dirección</TextPoppins>
                <TextPoppins semiBold style={styles.text} ß>{customer.direction}</TextPoppins>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        alignSelf: 'center',
        marginTop: 30,
        width: '70%',
        marginBottom: 30,
    },
    dataSpacing: {
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        letterSpacing: 1,
    }
})