import { Text, View, StyleSheet, TouchableOpacity, Button, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInputPoppins, TextRoboto } from '../../utils/CustomFonts';
import { useFormik } from 'formik';
import { toastMessage } from '../../utils/ToastMessage';
import { COLORS } from '../../utils/Const';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import ClientPicker from '../Pickers/ClientPicker';
import { ClientDatePicker } from '../Pickers/ClientDatePicker';
import { createOfferApi, updateOfferApi } from '../../api/OffersApi';
import OfferStatusPicker from '../Pickers/OfferStatusPicker';

export default function OfferEditForm({ offer }) {
    const navigation = useNavigation();
    const [percentValue, setPercentValue] = useState(offer.percent);
    const [percentError, setPercentError] = useState(false);
    const formik = useFormik({
        initialValues: initialValuesEditOffer(offer, percentValue),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (data) => {
            const content = await updateOfferApi(data, percentValue);

            if (typeof content === 'object') {
                toastMessage('Oferta editada correctamente', COLORS.succes);
                navigation.navigate('MainOffers');
            } else {
                toastMessage('Hubo un error en el registro', COLORS.error);
            }

        }
    });

    const onCheckLimit = (value) => {
        const total = 100 - parseInt(percentValue);
        if (total === 100 && parseInt(value) > total) {
        } else if (parseInt(value) > total) {
        } else {
            formik.setFieldValue('percent', value);
        }
    }

    return (
        <ScrollView style={{ flexGrow: 1 }}>

            <TextInputPoppins
                placeholder='Oferta'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='words'
                secureTextEntry={false}
                value={formik.values.offer}
                onChangeText={(text) => formik.setFieldValue('offer', text)}
                regular
            />
            <TextInputPoppins
                placeholder='Nombre de la oferta'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='sentences'
                secureTextEntry={false}
                value={formik.values.offerName}
                onChangeText={(text) => formik.setFieldValue('offerName', text)}
                regular
            />

            <ClientDatePicker initialDate={offer.decisionDate} dateSelection={(date) => formik.setFieldValue('decisionDate', date)} />

            <TextInputPoppins
                placeholder='Precio'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='none'
                secureTextEntry={false}
                keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad'}
                value={formik.values.price}
                onChangeText={(text) => formik.setFieldValue('price', text)}
                regular
            />

            <OfferStatusPicker initialStatus={offer.status} statusSelection={(status) => formik.setFieldValue('status', status)} />

            {offer.status === 'PAYMENT_PENDING' &&
                <TextInputPoppins
                    placeholder='Porcentaje'
                    style={styles.input}
                    placeholderTextColor={'#696767'}
                    autoCapitalize='none'
                    secureTextEntry={false}
                    keyboardType='numeric'
                    value={formik.values.percent}
                    onChangeText={(text) => onCheckLimit(text)}
                    maxLength={3}
                    regular
                />}

            {formik.errors.companyName && formik.errors.managerName && formik.errors.managerCharge && formik.errors.phoneNumber && formik.errors.cif && formik.errors.direction ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.companyName ? <Text style={styles.error}>{formik.errors.companyName}</Text> :
                        <>
                            {formik.errors.offer ? <Text style={styles.error}>{formik.errors.offer}</Text> :
                                <>
                                    {formik.errors.offerName ? <Text style={styles.error}>{formik.errors.offerName}</Text> :
                                        <>
                                            {formik.errors.decisionDate ? <Text style={styles.error}>{formik.errors.decisionDate}</Text> :
                                                <>
                                                    {formik.errors.price ? <Text style={styles.error}>{formik.errors.price}</Text> :
                                                        <>
                                                            {/* {errorCheckPasswords && <Text style={styles.error}>{errorCheckPasswords}</Text>} */}
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

function initialValuesEditOffer(offer, percentValue) {
    return {
        id: offer.id,
        clientId: offer.clientId,
        companyName: offer.companyName,
        decisionDate: offer.decisionDate,
        offer: offer.offer,
        offerName: offer.offerName,
        price: String(offer.price),
        status: offer.status,
        percent: String(percentValue),
    }
}

function validationSchema() {
    return {
        companyName: Yup.string().required('Debe seleccionar un cliente'),
        decisionDate: Yup.string().required('fecha de decisi??n es obligatorio'),
        offer: Yup.string().required('El tipo de oferta es obligatorio'),
        offerName: Yup.string().required('El nombre de la oferta es obligatorio'),
        price: Yup.string().required('El precio es obligatorio').matches(/^[0-9]*$/, 'El precio debe ser un n??mero'),
        status: Yup.string().required('El estado de la oferta es obligatorio'),
        percent: Yup.string().required('El porcentaje es obligatorio').matches(/^[0-9]*$/, 'El porcentaje debe ser un n??mero'),
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
