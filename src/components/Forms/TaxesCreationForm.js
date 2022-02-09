import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInputPoppins, TextPoppins, TextRoboto } from '../../utils/CustomFonts';
import { COLORS } from '../../utils/Const';
import { TaxesDatePicker } from '../Pickers/TaxesDatePicker';
import { useFormik } from 'formik';
import { createIvaPayment } from '../../api/TaxesApi';
import * as Yup from 'yup';
import { toastMessage } from '../../utils/ToastMessage';
import { useNavigation } from '@react-navigation/native';

export default function TaxesCreationForm() {

    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValuesTaxesPay(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (data) => {
            console.log(data);
            const content = await createIvaPayment(data);

            if (typeof content === 'object') {
                toastMessage('Pago de IVA creada correctamente', COLORS.succes);
                navigation.navigate('PaidTaxes');
            } else {
                toastMessage('Hubo un error en el registro', COLORS.error);
            }
        }
    });

    return (
        <>
            <TextInputPoppins
                placeholder='Pago'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='none'
                secureTextEntry={false}
                keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                value={formik.values.iva}
                onChangeText={(text) => formik.setFieldValue('iva', text)}
                regular
            />

            <TaxesDatePicker dateSelection={(text) => formik.setFieldValue('date', text)} />

            {formik.errors.iva && formik.errors.date ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.iva ? <Text style={styles.error}>{formik.errors.iva}</Text> :
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
                <TextRoboto style={styles.saveText}>PAGAR</TextRoboto>
            </TouchableOpacity>
        </>
    )
}

function initialValuesTaxesPay() {
    return {
        iva: '',
        date: '',
    }
}

function validationSchema() {
    return {
        iva: Yup.string().required('El teléfono es obligatorio').matches(/^\d*\.?\d*$/, 'El IVA debe ser números'),
        date: Yup.string().required('La fecha es obligatoria'),
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
});
