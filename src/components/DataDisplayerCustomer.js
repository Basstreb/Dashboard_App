import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextPoppins } from '../utils/CustomFonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OptionsModal from './OptionsModal';
import { COLORS } from '../utils/Const';
import Icon from 'react-native-vector-icons/Entypo';

export default function DataDisplayerCustomer(props) {

    const [optionsModalVisible, setOptionsModalVisible] = useState(false);
    const { customer } = props;

    return (
        <>
            <View style={styles.topMenu}>
                <TextPoppins regular style={styles.titleText}>Nombre de la compañía</TextPoppins>
                <TouchableOpacity
                    onPress={() => setOptionsModalVisible(true)}>
                    <Icon
                        name='dots-three-vertical'
                        size={20}
                        color={COLORS.merkinsio}
                    />
                </TouchableOpacity>
            </View>
            <TextPoppins medium style={styles.textData}>{customer.companyName}</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Representante</TextPoppins>
            <TextPoppins medium style={styles.textData}>{customer.managerName}</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Teléfono</TextPoppins>
            <TextPoppins medium style={styles.textDataFinal}>{customer.phoneNumber}</TextPoppins>

            <OptionsModal id={customer.id} customer={customer} optionsModalVisible={optionsModalVisible} closeOptionsModalVisible={() => setOptionsModalVisible(!optionsModalVisible)} />
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