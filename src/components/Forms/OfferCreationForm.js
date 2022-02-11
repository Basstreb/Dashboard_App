import { Text, View, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInputPoppins, TextRoboto } from '../../utils/CustomFonts';
import { useFormik } from 'formik';
import { toastMessage } from '../../utils/ToastMessage';
import { COLORS } from '../../utils/Const';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import ClientPicker from '../Pickers/ClientPicker';
import {ClientDatePicker} from '../Pickers/ClientDatePicker';
import { createOfferApi } from '../../api/OffersApi';

export default function OfferCreationForm() {

  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValuesCreationCustomer(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
      const content = await createOfferApi(data);

      if (typeof content === 'object') {
        toastMessage('Oferta creada correctamente', COLORS.succes);
        navigation.navigate('MainOffers');
      } else {
        toastMessage('Hubo un error en el registro', COLORS.error);
      }
    }
  });

  return (
    <View>

      <ClientPicker clientSelection={(id, companyName) => {
        formik.setFieldValue('clientId', id);
        formik.setFieldValue('companyName', companyName);
      }} />

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
      
      <ClientDatePicker dateSelection={(date) => formik.setFieldValue('decisionDate', date)}/>

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
        <TextRoboto style={styles.saveText}>AÑADIR</TextRoboto>
      </TouchableOpacity>
    </View>
  );
}

function initialValuesCreationCustomer() {
  return {
    clientId: '',
    companyName: '',
    decisionDate: '',
    offer: '',
    offerName: '',
    price: '',
  }
}

function validationSchema() {
  return {
    companyName: Yup.string().required('Debe seleccionar un cliente'),
    decisionDate: Yup.string().required('fecha de decisión es obligatorio'),
    offer: Yup.string().required('El tipo de oferta es obligatorio'),
    offerName: Yup.string().required('El nombre de la oferta es obligatorio'),
    price: Yup.string().required('El precio es obligatorio').matches(/^[0-9]*$/, 'El precio debe ser un número'),
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
