import { ScrollView, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextPoppins } from '../utils/CustomFonts';
import dayjs from 'dayjs';

export default function DataDetailStaffCost({ staffCost }) {
    return (
        <ScrollView style={styles.detailsContainer}>
            <View>
                <TextPoppins light style={styles.text}>Empleado</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{staffCost.staffName}</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Importe Neto</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{staffCost.amount}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Coste Empresa</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{staffCost.cost}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Valor de Seguridad Social</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{staffCost.socialInsurances}€</TextPoppins>
            </View>

            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Proyecto trabajado</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{staffCost.project1Name} - {staffCost.per1}%</TextPoppins>
            </View>

            {staffCost.project2Name !== '' &&
                <View style={styles.dataSpacing}>
                    <TextPoppins light style={styles.text}>Proyecto trabajado</TextPoppins>
                    <TextPoppins semiBold style={styles.text}>{staffCost.project2Name} - {staffCost.per2}%</TextPoppins>
                </View>}

            {staffCost.project3Name !== '' &&
                <View style={styles.dataSpacing}>
                    <TextPoppins light style={styles.text}>Proyecto trabajado</TextPoppins>
                    <TextPoppins semiBold style={styles.text}>{staffCost.project3Name} - {staffCost.per3}%</TextPoppins>
                </View>}

            {staffCost.project4Name !== '' &&
                <View style={styles.dataSpacing}>
                    <TextPoppins light style={styles.text}>Proyecto trabajado</TextPoppins>
                    <TextPoppins semiBold style={styles.text}>{staffCost.project4Name} - {staffCost.per4}%</TextPoppins>
                </View>}


            <View style={styles.dataSpacing}>
                <TextPoppins light style={styles.text}>Fecha</TextPoppins>
                <TextPoppins semiBold style={styles.text}>{dayjs(staffCost.payDate).format('DD/MM/YYYY')}</TextPoppins>
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