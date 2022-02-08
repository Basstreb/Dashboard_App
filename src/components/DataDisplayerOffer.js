import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextPoppins } from '../utils/CustomFonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, showStatus } from '../utils/Const';
import Icon from 'react-native-vector-icons/Entypo';
import OptionsOfferModal from './Modals/OptionsOfferModal';

export default function DataDisplayerOffer(props) {

    const [optionsModalVisible, setOptionsModalVisible] = useState(false);
    const { offer } = props;
    const statusBg = {
        backgroundColor: showStatus(offer.status),
        ...styles.statusColor
    };

    return (
        <>
            <View style={styles.topMenu}>
                <TextPoppins regular style={styles.titleText}>Nombre del cliente</TextPoppins>
                <View style={statusBg}/>
                <TouchableOpacity
                    onPress={() => setOptionsModalVisible(true)}>
                    <Icon
                        name='dots-three-vertical'
                        size={20}
                        color={COLORS.merkinsio}
                    />
                </TouchableOpacity>
            </View>
            <TextPoppins medium style={styles.textData}>{offer.companyName}</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Tipo de oferta</TextPoppins>
            <TextPoppins medium style={styles.textData}>{offer.offer}</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Nombre de la oferta</TextPoppins>
            <TextPoppins medium style={styles.textDataFinal}>{offer.offerName}</TextPoppins>

            <OptionsOfferModal id={offer.id} offer={offer} optionsModalVisible={optionsModalVisible} closeOptionsModalVisible={() => setOptionsModalVisible(!optionsModalVisible)} />
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
    statusColor: {
        width: 20,
        height: 20,
        borderRadius: 100,

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