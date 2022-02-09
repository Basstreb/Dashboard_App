import { StyleSheet } from 'react-native';
import React from 'react';
import { TextPoppins } from '../utils/CustomFonts';
import { COLORS } from '../utils/Const';
import dayjs from 'dayjs';

export default function DataDisplayerTaxes({ taxes }) {
    return (
        <>
            {!taxes.amount &&
                <>
                    <TextPoppins regular style={styles.titleText}>Nombre de la oferta</TextPoppins>
                    <TextPoppins medium style={styles.textData}>{taxes.name}</TextPoppins>
                </>}
            <TextPoppins regular style={styles.titleText}>IVA</TextPoppins>
            <TextPoppins medium style={styles.textData}>{taxes.amount ? taxes.amount.toFixed(2) : taxes.iva.toFixed(2)}€</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Fecha</TextPoppins>
            <TextPoppins medium style={styles.textDataFinal}>{dayjs(taxes.date).format('DD/MM/YYYY')}</TextPoppins>
        </>
    );
}

const styles = StyleSheet.create({
    topMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        color: COLORS.merkinsio,
        fontSize: 15,
        letterSpacing: 0,
        marginBottom: 10,
    },
    textData: {
        color: '#5F5F5F',
        fontSize: 17,
        letterSpacing: 0,
        marginBottom: 10,
    },
    textDataFinal: {
        color: '#5F5F5F',
        fontSize: 17,
        letterSpacing: 0,
        marginBottom: 0,
    },
})