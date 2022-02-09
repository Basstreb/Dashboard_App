import { View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextPoppins } from '../utils/CustomFonts';
import { ScrollView } from 'react-native';
import { showStatus, trasnlateOfferStatus } from '../utils/Const';

export default function DataDetailOffer({ offer }) {

    const statusBg = {
        backgroundColor: showStatus(offer.status),
        ...styles.statusStyle
    };

    return (
        <ScrollView style={styles.detailsContainer}>
            <View>
                <TextPoppins light style={styles.text}>Cliente</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.companyName}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Oferta</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.offer}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Nombre de la Oferta</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.offerName}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Precio</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.price}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Precio con IVA</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.priceIva}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Fecha de decisión</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.decisionDate.split('T')[0]}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Fecha de decisión</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.decisionDate.split('T')[0]}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Fecha de creación</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.createdAt.split('T')[0]}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Código</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{offer.code}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Estado</TextPoppins>
                <View style={statusBg}>
                    <TextPoppins semiBold style={styles.statusText}>{trasnlateOfferStatus(offer.status)}</TextPoppins>
                </View>
            </View>
        </ScrollView>
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
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        letterSpacing: 1,
    },
    statusStyle: {
        padding: 5,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        width: '80%',
        marginBottom: 20,
        borderRadius: 8,
    },
    statusText:{
        color: '#FFF',
        fontSize: 16,
        letterSpacing: 1,
    },
})