import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextPoppins } from '../utils/CustomFonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../utils/Const';
import Icon from 'react-native-vector-icons/Entypo';
import OptionsCommonCostModal from './Modals/OptionsCommonCostModal';
import dayjs from 'dayjs';
import OptionsStaffCostModal from './Modals/OptionsStaffCostModal';

export default function DataDisplayerStaffCosts(props) {

    const { staffCost } = props;
    const [optionsModalVisible, setOptionsModalVisible] = useState(false);

    return (
        <>
            <View style={styles.topMenu}>
                <TextPoppins regular style={styles.titleText}>Empleado</TextPoppins>
                <TouchableOpacity onPress={() => setOptionsModalVisible(true)}>
                    <Icon
                        name='dots-three-vertical'
                        size={20}
                        color={COLORS.merkinsio}
                    />
                </TouchableOpacity>
            </View>

            <TextPoppins medium style={styles.textData}>{staffCost.staffName}</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Coste para la empresa</TextPoppins>
            <TextPoppins medium style={styles.textData}>{staffCost.cost.toFixed(2)}€</TextPoppins>
            <TextPoppins regular style={styles.titleText}>Fecha</TextPoppins>
            <TextPoppins medium style={styles.textDataFinal}>{dayjs(staffCost.payDate).format('DD/MM/YYYY')}</TextPoppins>

            <OptionsStaffCostModal id={staffCost.id} staffCost={staffCost} optionsModalVisible={optionsModalVisible} closeOptionsModalVisible={() => setOptionsModalVisible(!optionsModalVisible)} />
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
