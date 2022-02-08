import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInputPoppins, TextRoboto } from '../../utils/CustomFonts';
import { useFormik } from 'formik';
import { updateCustomerApi } from '../../api/CustomersApi';
import { toastMessage } from '../../utils/ToastMessage';
import { COLORS } from '../../utils/Const';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

export default function CustomerEditForm(props) {

    const { customer } = props;
    const navigation = useNavigation();
    const formik = useFormik({
        initialValues: initialValuesEditCustomer(customer),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (data) => {

            const content = await updateCustomerApi(data, String(customer.id));  

            if(typeof content === 'object'){
                toastMessage('Cliente actualizado correctamente', COLORS.succes);
                navigation.navigate('MainCustomers');
            } else {
                toastMessage('Hubo un error en el registro', COLORS.error);
            }
        }
    });

    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <TextInputPoppins
                placeholder='Compañía'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='words'
                secureTextEntry={false}
                value={formik.values.companyName}
                onChangeText={(text) => formik.setFieldValue('companyName', text)}
                regular
            />
            <TextInputPoppins
                placeholder='Representante'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='words'
                secureTextEntry={false}
                value={formik.values.managerName}
                onChangeText={(text) => formik.setFieldValue('managerName', text)}
                regular
            />
            <TextInputPoppins
                placeholder='Cargo'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='sentences'
                secureTextEntry={false}
                value={formik.values.managerCharge}
                onChangeText={(text) => formik.setFieldValue('managerCharge', text)}
                regular
            />
            <TextInputPoppins
                placeholder='Teléfono'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='none'
                secureTextEntry={false}
                value={formik.values.phoneNumber}
                onChangeText={(text) => formik.setFieldValue('phoneNumber', text)}
                regular
            />
            <TextInputPoppins
                placeholder='CIF'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='sentences'
                secureTextEntry={false}
                value={formik.values.cif}
                onChangeText={(text) => formik.setFieldValue('cif', text)}
                regular
            />
            <TextInputPoppins
                placeholder='Dirección'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='sentences'
                secureTextEntry={false}
                value={formik.values.direction}
                onChangeText={(text) => formik.setFieldValue('direction', text)}
                regular
            />

            {formik.errors.companyName && formik.errors.managerName && formik.errors.managerCharge && formik.errors.phoneNumber && formik.errors.cif && formik.errors.direction ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.companyName ? <Text style={styles.error}>{formik.errors.companyName}</Text> :
                        <>
                            {formik.errors.managerName ? <Text style={styles.error}>{formik.errors.managerName}</Text> :
                                <>
                                    {formik.errors.managerCharge ? <Text style={styles.error}>{formik.errors.managerCharge}</Text> :
                                        <>
                                            {formik.errors.phoneNumber ? <Text style={styles.error}>{formik.errors.phoneNumber}</Text> :
                                                <>
                                                    {formik.errors.cif ? <Text style={styles.error}>{formik.errors.cif}</Text> :
                                                        <>
                                                            {formik.errors.direction ? <Text style={styles.error}>{formik.errors.direction}</Text> :
                                                                <>
                                                                    {/* {errorCheckPasswords && <Text style={styles.error}>{errorCheckPasswords}</Text>} */}
                                                                </>}
                                                        </>}
                                                </>}
                                        </>}
                                </>}
                        </>}
                </>
            }

            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => formik.handleSubmit()}>
                <TextRoboto style={styles.saveText}>GUARDAR</TextRoboto>
            </TouchableOpacity>
        </ScrollView>
    );
}

function initialValuesEditCustomer(customer) {
    return {
        companyName: customer.companyName,
        managerName: customer.managerName,
        managerCharge: customer.managerCharge,
        phoneNumber: customer.phoneNumber,
        cif: customer.cif,
        direction: customer.direction,
    }
}

function validationSchema() {
    return {
        companyName: Yup.string().required('El nombre de la compañía es obligatorio'),
        managerName: Yup.string().required('El nombre del representante es obligatorio'),
        managerCharge: Yup.string().required('El cargo del representante es obligatorio'),
        phoneNumber: Yup.string().required('El teléfono es obligatorio').matches(/^[0-9]{9}$/, 'El teléfono debe tener 9 dígitos'),
        cif: Yup.string().required('El CIF es obligatorio').matches(/^[A-Z]{1}[0-9]{8}$/, 'El CIF debe tener un patron A12345678'),
        direction: Yup.string().required('La dirección es obligatoria'),
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
    error: {
        color: 'red',
        marginTop: 14,
        marginBottom: -31,
        textAlign: 'center',
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
