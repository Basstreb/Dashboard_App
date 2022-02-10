import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextPoppins } from '../utils/CustomFonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OptionsCustomerModal from './Modals/OptionsCustomerModal';
import { COLORS } from '../utils/Const';
import Icon from 'react-native-vector-icons/Entypo';
import OptionsCommonCostModal from './Modals/OptionsCommonCostModal';

export default function DataDisplayerCommonCosts(props) {

    const { commonCost } = props;
    const [optionsModalVisible, setOptionsModalVisible] = useState(false);

    return (
        <>
            <View style={styles.topMenu}>
                <TextPoppins regular style={styles.titleText}>Gasto</TextPoppins>
                <TouchableOpacity onPress={() => setOptionsModalVisible(true)}>
                    <Icon
                        name='dots-three-vertical'
                        size={20}
                        color={COLORS.merkinsio}
                    />
                </TouchableOpacity>
            </View>

            <TextPoppins medium style={styles.textData}>{commonCost.commonCostsName}</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Oferta asociada</TextPoppins>
            <TextPoppins medium style={styles.textData}>{commonCost.offerName}</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Importe</TextPoppins>
            <TextPoppins medium style={styles.textDataFinal}>{commonCost.amount}€</TextPoppins>

            {/* <OptionsCustomerModal id={customer.id} customer={customer} optionsModalVisible={optionsModalVisible} closeOptionsModalVisible={() => setOptionsModalVisible(!optionsModalVisible)} /> */}
            <OptionsCommonCostModal commonCost={commonCost} optionsModalVisible={optionsModalVisible} closeOptionsModalVisible={() => setOptionsModalVisible(!optionsModalVisible)} />
        </>
    )
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
