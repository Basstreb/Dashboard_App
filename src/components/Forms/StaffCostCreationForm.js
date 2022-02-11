import { StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import React from 'react';
import { TextInputPoppins, TextRoboto } from '../../utils/CustomFonts';
import { useFormik } from 'formik';
import { toastMessage } from '../../utils/ToastMessage';
import { COLORS } from '../../utils/Const';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import OfferPicker from '../Pickers/OfferPicker';
import { createStaffCost } from '../../api/CostsApi';
import { StaffCostDatePicker } from '../Pickers/StaffCostDatePicker';
import StaffCostErrors from '../StaffCostErrors';
import StaffCostOfferPicker from '../Pickers/StaffCostOfferPicker';

export default function StaffCostCreationForm() {
    const navigation = useNavigation();
    const formik = useFormik({
        initialValues: initialValuesCreationStaffCost(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (data) => {
            const content = await createStaffCost(data);

            if (typeof content === 'object') {
                toastMessage('Gasto común creado correctamente', COLORS.succes);
                navigation.navigate('StaffCosts');
            } else {
                toastMessage('Hubo un error en el registro', COLORS.error);
            }
        }
    });

    return (
        <ScrollView>

            <TextInputPoppins
                placeholder='Empleado'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='sentences'
                secureTextEntry={false}
                value={formik.values.staffName}
                onChangeText={(text) => formik.setFieldValue('staffName', text)}
                regular
            />

            <TextInputPoppins
                placeholder='Importe'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='none'
                secureTextEntry={false}
                keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                value={formik.values.amount}
                onChangeText={(text) => formik.setFieldValue('amount', text)}
                regular
            />

            <TextInputPoppins
                placeholder='Coste'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='none'
                secureTextEntry={false}
                keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                value={formik.values.cost}
                onChangeText={(text) => formik.setFieldValue('cost', text)}
                regular
            />

            <StaffCostOfferPicker offerSelection={(id) => {
                formik.setFieldValue('project1', id);
            }} />

            <TextInputPoppins
                placeholder='Porcentaje'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='none'
                secureTextEntry={false}
                keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                value={formik.values.per1}
                onChangeText={(text) => formik.setFieldValue('per1', text)}
                regular
            />

            {(formik.values.project1 !== '' && formik.values.project1 !== undefined) &&
                <>
                    <StaffCostOfferPicker offerSelection={(id) => {
                        formik.setFieldValue('project2', id);
                    }} />

                    {(formik.values.project2 !== '' && formik.values.project2 !== undefined) &&
                        <TextInputPoppins
                            placeholder='Porcentaje'
                            style={styles.input}
                            placeholderTextColor={'#696767'}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                            value={formik.values.per2}
                            onChangeText={(text) => formik.setFieldValue('per2', text)}
                            regular
                        />}
                </>}

            {(formik.values.project2 !== '' && formik.values.project2 !== undefined) &&
                <>
                    <StaffCostOfferPicker offerSelection={(id) => {
                        formik.setFieldValue('project3', id);
                    }} />

                    {(formik.values.project3 !== '' && formik.values.project3 !== undefined) &&
                        <TextInputPoppins
                            placeholder='Porcentaje'
                            style={styles.input}
                            placeholderTextColor={'#696767'}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                            value={formik.values.per3}
                            onChangeText={(text) => formik.setFieldValue('per3', text)}
                            regular
                        />}
                </>}

            {(formik.values.project3 !== '' && formik.values.project3 !== undefined) &&
                <>
                    <StaffCostOfferPicker offerSelection={(id) => {
                        formik.setFieldValue('project4', id);
                    }} />

                    {(formik.values.project4 !== '' && formik.values.project4 !== undefined) &&
                        <TextInputPoppins
                            placeholder='Porcentaje'
                            style={styles.input}
                            placeholderTextColor={'#696767'}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                            value={formik.values.per4}
                            onChangeText={(text) => formik.setFieldValue('per4', text)}
                            regular
                        />}
                </>}

            <StaffCostDatePicker dateSelection={(date) => formik.setFieldValue('payDate', date)} />

            <StaffCostErrors formik={formik} />

            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => formik.handleSubmit()}>
                <TextRoboto style={styles.saveText}>AÑADIR</TextRoboto>
            </TouchableOpacity>
        </ScrollView>
    );
}

function initialValuesCreationStaffCost() {
    return {
        staffName: '',
        amount: '',
        cost: '',
        project1: '',
        per1: '',
        project2: '',
        per2: '',
        project3: '',
        per3: '',
        project4: '',
        per4: '',
        payDate: '',
    }
}

function validationSchema() {
    return {
        staffName: Yup.string().required('Debe introducir un nombre de empleado'),
        amount: Yup.string().required('Debe introducir el importe').matches(/^[0-9]*$/, 'Solo se permiten números'),
        cost: Yup.string().required('Debe introducir el coste').matches(/^[0-9]*$/, 'Solo se permiten números'),
        project1: Yup.string().required('Debe seleccionar un proyecto'),
        per1: Yup.string().required('Debe introducir un porcentaje').matches(/^[0-9]*$/, 'Solo se permiten números'),
        project2: '',
        per2: Yup.string().when('project2', {
            is: (text) => text !== '' && text !== undefined,
            then: Yup.string().required('Debe introducir un porcentaje').matches(/^[0-9]*$/, 'Solo se permiten números'),
        }),
        project3: '',
        per3: Yup.string().when('project3', {
            is: (text) => text !== '' && text !== undefined,
            then: Yup.string().required('Debe introducir un porcentaje').matches(/^[0-9]*$/, 'Solo se permiten números'),
        }),
        project4: '',
        per4: Yup.string().when('project4', {
            is: (text) => text !== '' && text !== undefined,
            then: Yup.string().required('Debe introducir un porcentaje').matches(/^[0-9]*$/, 'Solo se permiten números'),
        }),
        payDate: Yup.string().required('Debe introducir una fecha'),
    };
}

const styles = StyleSheet.create({
    input: {
        color: '#696767',
        marginHorizontal: 50,
        fontSize: 15,
        marginTop: 30,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#8A8888',
    },
    saveButton: {
        backgroundColor: '#0078B4',
        borderRadius: 15,
        padding: 15,
        width: 325,
        alignSelf: 'center',
        marginTop: 50,
    },
    saveText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },
})
