import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInputPoppins, TextRoboto } from '../../utils/CustomFonts';
import Feather from 'react-native-vector-icons/Feather';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { loginUserApi } from '../../api/AuthApi';

export default function LoginForm() {

    const [seePassword, setSeePassword] = useState(true);
    const [error, setError] = useState(undefined);
    const navigation = useNavigation();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (data) => {

            const content = await loginUserApi(data);

            if (content.message === "user not found" || content.message === "incorrect password") {
                setError('Email o contraseña incorrectos');
            } else {
                setError(undefined);
                navigation.navigate('Navigation');
            }
        }
    });

    return (
        <View style={styles.inputContainer}>
            <TextInputPoppins
                placeholder='Email'
                style={styles.input}
                placeholderTextColor={'#696767'}
                autoCapitalize='none'
                secureTextEntry={false}
                value={formik.values.email}
                onChangeText={(text) => formik.setFieldValue('email', text)}
                regular
            />
            <View style={styles.inputPassContainer}>
                <TextInputPoppins
                    placeholder='Contraseña'
                    style={styles.inputPass}
                    placeholderTextColor={'#696767'}
                    autoCapitalize='none'
                    secureTextEntry={seePassword}
                    value={formik.values.password}
                    onChangeText={(text) => formik.setFieldValue('password', text)}
                    regular
                />
                <TouchableOpacity onPress={() => { setSeePassword(!seePassword) }}>
                    {seePassword ?
                        <Feather name='eye-off' size={25} color={'#696767'} />
                        : <Feather name='eye' size={25} color={'#696767'} />}
                </TouchableOpacity>
            </View>

            {formik.errors.email && formik.errors.password ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.email && <Text style={styles.error}>{formik.errors.email}</Text>}
                    {formik.errors.password && <Text style={styles.error}>{formik.errors.password}</Text>}
                    <Text style={styles.error}>{error}</Text>
                </>}

            {/* <TouchableOpacity>
                <TextPoppins medium style={styles.forgetText}>¿Olvidé mi contraseña?</TextPoppins>
            </TouchableOpacity> */}

            <TouchableOpacity
                style={styles.loginButton}
                // onPress={goToHome}
                onPress={() => formik.handleSubmit()}>
                <TextRoboto style={styles.loginText}>ENTRAR</TextRoboto>
            </TouchableOpacity>
        </View>
    );
};

function initialValues() {
    return {
        email: '',
        password: '',
    }
}

function validationSchema() {
    return {
        email: Yup.string().email('Email inválido').required('Email es requerido'),
        password: Yup.string().required('La contraseña es obligatoria')
    };
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 50,
    },
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
    inputPass: {
        color: '#696767',
        fontSize: 15,
        width: '90%',
    },
    inputPassContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginHorizontal: 50,
        marginVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#8A8888',
    },
    error: {
        color: 'red',
        marginTop: -5,
        marginBottom: -16,
        textAlign: 'center',
    },
    forgetText: {
        fontSize: 15,
        color: '#313131',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: '#0078B4',
        borderRadius: 15,
        padding: 15,
        width: 325,
        alignSelf: 'center',
        marginTop: 50,
    },
    loginText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});