import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { TextInputPoppins, TextRoboto } from '../../utils/CustomFonts';
import { useFormik } from 'formik';
import { toastMessage } from '../../utils/ToastMessage';
import { COLORS } from '../../utils/Const';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import OfferPicker from '../Pickers/OfferPicker';
import CommonCostTypoPicker from '../Pickers/CommonCostTypoPicker';
import CommonCostIvaPicker from '../Pickers/CommonCostIvaPicker';
import { CommonCostDatePicker } from '../Pickers/CommonCostDatePicker';
import { updateCommonCost } from '../../api/CostsApi';

export default function CommonCostEditForm({ commonCost }) {

    const navigation = useNavigation();
    const formik = useFormik({
        initialValues: initialValuesEditCommonCost(commonCost),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (data) => {
            const content = await updateCommonCost(data, commonCost.id);

            if (typeof content === 'object') {
                toastMessage('Gasto común actualizado correctamente', COLORS.succes);
                navigation.navigate('CommonCosts');
            } else {
                toastMessage('Hubo un error en el registro', COLORS.error);
            }
        }
    });

    return (
        <View>

            <TextInputPoppins
                placeholder='Gasto'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='sentences'
                secureTextEntry={false}
                value={formik.values.commonCostsName}
                onChangeText={(text) => formik.setFieldValue('commonCostsName', text)}
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

            <CommonCostTypoPicker initialStatus={commonCost.typo} typoSelection={(text) => formik.setFieldValue('typo', text)} />

            <CommonCostIvaPicker initialStatus={commonCost.iva} ivaSelection={(text) => formik.setFieldValue('iva', text)} />

            <CommonCostDatePicker initialDate={commonCost.costDate} dateSelection={(date) => formik.setFieldValue('costDate', date)} />

            {formik.errors.offerId && formik.errors.offerName && formik.errors.commonCostsName && formik.errors.amount && formik.errors.typo && formik.errors.iva && formik.errors.costDate ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.offerName ? <Text style={styles.error}>{formik.errors.offerName}</Text> :
                        <>
                            {formik.errors.commonCostsName ? <Text style={styles.error}>{formik.errors.commonCostsName}</Text> :
                                <>
                                    {formik.errors.amount ? <Text style={styles.error}>{formik.errors.amount}</Text> :
                                        <>
                                            {formik.errors.typo ? <Text style={styles.error}>{formik.errors.typo}</Text> :
                                                <>
                                                    {formik.errors.iva ? <Text style={styles.error}>{formik.errors.iva}</Text> :
                                                        <>
                                                            {formik.errors.costDate ? <Text style={styles.error}>{formik.errors.costDate}</Text> :
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
        </View>
    );
}

function initialValuesEditCommonCost(commonCost) {
    return {
        offerId: commonCost.offerId,
        offerName: commonCost.offerName,
        commonCostsName: commonCost.commonCostsName,
        amount: String(commonCost.amount),
        typo: commonCost.typo,
        iva: commonCost.iva,
        costDate: commonCost.costDate,
    }
}

function validationSchema() {
    return {
        offerName: Yup.string().required('Debe seleccionar una oferta'),
        commonCostsName: Yup.string().required('Debe introducir un nombre'),
        amount: Yup.string().required('Debe introducir un precio').matches(/^[0-9]*$/, 'Solo se permiten números'),
        typo: Yup.string().required('Debe introducir un tipo de gasto'),
        iva: Yup.string().required('Debe introducir un valor de iva'),
        costDate: Yup.string().required('Debe introducir una fecha'),
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
