import { ScrollView, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextPoppins } from '../utils/CustomFonts';
import dayjs from 'dayjs';

export default function DataDetailCommonCost({ commonCost }) {
    return (
        <ScrollView style={styles.detailsContainer}>
            <View>
                <TextPoppins light style={styles.text}>Gasto</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{commonCost.commonCostsName}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Oferta asociada</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{commonCost.offerName}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Tipo de gasto</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{commonCost.typo}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Importe</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{commonCost.amount}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Importe sin IVA</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{commonCost.amountW && commonCost.amountW.toFixed(2)}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>IVA</TextPoppins>
                <TextPoppins semiBold style={styles.text} ß>{commonCost.iva}%</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Gasto IVA</TextPoppins>
                <TextPoppins semiBold style={styles.text} ß>{(commonCost.amount - commonCost.amountW).toFixed(2)}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Fecha</TextPoppins>
                <TextPoppins semiBold style={styles.text} ß>{dayjs(commonCost.costDate).format('DD/MM/YYYY')}</TextPoppins>
            </View>
        </ScrollView>
    )
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