import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInputPoppins, TextRoboto } from '../../utils/CustomFonts';
import Icon from 'react-native-vector-icons/Feather';
import { useFormik } from 'formik';
import { registerUserApi } from '../../api/AuthApi';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { toastMessage } from '../../utils/ToastMessage';
import { COLORS } from '../../utils/Const';

export default function RegisterForm() {

    const [seePassword, setSeePassword] = useState(true);
    const [seeSecondPassword, setSeeSecondPassword] = useState(true);
    const [errorCheckPasswords, setErrorCheckPasswords] = useState(undefined);
    const [error, setError] = useState(undefined);
    const navigation = useNavigation();

    const passwordInputStyle = (check) => {
        const color = check ? '#FF3E3E' : '#8A8888';
        return {
            borderBottomColor: color,
        }
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (data) => {

            const dataValidation = {
                name: data.username,
                email: data.email,
                password: data.password,
            }

            if (data.password != data.passwordConfirmation) {
                setErrorCheckPasswords('Las contraseñas no coinciden');
            } else {
                setErrorCheckPasswords(undefined);
                const content = await registerUserApi(dataValidation);

                if (content.message === "The user already exits") {
                    setError('El usuario ya esta registrado');
                } else {
                    setError(undefined);
                    navigation.navigate('Login');
                    toastMessage('Usuario registrado correctamente', COLORS.succes);
                }
            }
        }
    });

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInputPoppins
                    placeholder='Nombre Completo'
                    style={styles.input}
                    placeholderTextColor={'#696767'}
                    autoCapitalize='words'
                    secureTextEntry={false}
                    value={formik.values.username}
                    onChangeText={(text) => formik.setFieldValue('username', text)}
                    regular
                />
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
                <View style={[styles.inputPassContainer, passwordInputStyle(errorCheckPasswords)]}>
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
                            <Icon name='eye-off' size={25} color={'#696767'} />
                            : <Icon name='eye' size={25} color={'#696767'} />}
                    </TouchableOpacity>
                </View>
                <View style={[styles.inputPassContainer, passwordInputStyle(errorCheckPasswords)]}>
                    <TextInputPoppins
                        placeholder='Repita la Contraseña'
                        style={styles.inputPass}
                        placeholderTextColor={'#696767'}
                        autoCapitalize='none'
                        secureTextEntry={seeSecondPassword}
                        value={formik.values.passwordConfirmation}
                        onChangeText={(text) => formik.setFieldValue('passwordConfirmation', text)}
                        regular
                    />
                    <TouchableOpacity onPress={() => { setSeeSecondPassword(!seeSecondPassword) }}>
                        {seeSecondPassword ?
                            <Icon name='eye-off' size={25} color={'#696767'} />
                            : <Icon name='eye' size={25} color={'#696767'} />}
                    </TouchableOpacity>
                </View>
            </View>

            {formik.errors.email && formik.errors.password && formik.errors.passwordConfirmation && formik.errors.username ?
                <Text style={styles.error}>Los datos son obligatorios</Text> :
                <>
                    {formik.errors.username ? <Text style={styles.error}>{formik.errors.username}</Text> :
                        <>
                            {formik.errors.email ? <Text style={styles.error}>{formik.errors.email}</Text> :
                                <>
                                    {formik.errors.password ? <Text style={styles.error}>{formik.errors.password}</Text> :
                                        <>
                                            {formik.errors.passwordConfirmation ? <Text style={styles.error}>{formik.errors.passwordConfirmation}</Text> :
                                                <>
                                                    {errorCheckPasswords && <Text style={styles.error}>{errorCheckPasswords}</Text>}
                                                </>}
                                        </>}
                                </>}
                        </>}
                </>
            }

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => formik.handleSubmit()}>
                <TextRoboto style={styles.loginText}>REGISTRAR</TextRoboto>
            </TouchableOpacity>
        </View>
    );
}

function initialValues() {
    return {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }
}

function validationSchema() {
    return {
        username: Yup.string().required('El nombre es requerido'),
        email: Yup.string().email('Email inválido').required('Email es requerido'),
        password: Yup.string().required('La contraseña es obligatoria'),
        passwordConfirmation: Yup.string().required('La confirmación de la contraseña es obligatoria')
    };
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFF',
        height: '100%',
    },
    image: {
        marginTop: '25%',
        alignSelf: 'center',
        width: 148,
        height: 100,
    },
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
        marginTop: 30,
        borderBottomWidth: 1,
        // borderBottomColor: '#8A8888',
    },
    error: {
        color: 'red',
        marginTop: 14,
        marginBottom: -35,
        textAlign: 'center',
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
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    subtitleText: {
        fontSize: 17,
        color: '#0078B4',
        textDecorationLine: 'underline',
        letterSpacing: 1.5,
    },
})
