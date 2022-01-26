import { View, Text, TextInput, Touchable, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/MerkinsioLogo.png';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { TextInputPoppins, TextOverpassBold, TextPoppins, TextRoboto } from '../utils/CustomFonts';

export default function Register(props) {

    const [seePassword, setSeePassword] = useState(true);
    const [seeSecondPassword, setSeeSecondPassword] = useState(true);

    const { navigation, route: { params } } = props;

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    size={45}
                    color="#0078B4"
                    style={{ marginLeft: 20 }}
                    onPress={() => navigation.goBack()} />
            ),
        })
    }, [navigation, params])

    return (
        <SafeAreaView style={styles.bg}>
            <Image source={Logo} style={styles.image} />

            <View style={styles.inputContainer}>
                <TextInputPoppins
                    placeholder='Nombre Completo'
                    style={styles.input}
                    placeholderTextColor={'#696767'}
                    autoCapitalize='words'
                    secureTextEntry={false}
                    autoComplete='name'
                    regular
                />
                <TextInputPoppins
                    placeholder='Email'
                    style={styles.input}
                    placeholderTextColor={'#696767'}
                    autoCapitalize='none'
                    secureTextEntry={false}
                    autoComplete='email'
                    regular
                />
                <View style={styles.inputPassContainer}>
                    <TextInputPoppins
                        placeholder='Contraseña'
                        style={styles.inputPass}
                        placeholderTextColor={'#696767'}
                        autoCapitalize='none'
                        secureTextEntry={seePassword}
                        regular
                    />
                    <TouchableOpacity onPress={() => { setSeePassword(!seePassword) }}>
                        {seePassword ?
                            <Icon name='eye-off' size={25} color={'#696767'} />
                            : <Icon name='eye' size={25} color={'#696767'} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.inputPassContainer}>
                    <TextInputPoppins
                        placeholder='Repita la Contraseña'
                        style={styles.inputPass}
                        placeholderTextColor={'#696767'}
                        autoCapitalize='none'
                        secureTextEntry={seeSecondPassword}
                        regular
                    />
                    <TouchableOpacity onPress={() => { setSeeSecondPassword(!seeSecondPassword) }}>
                        {seeSecondPassword ?
                            <Icon name='eye-off' size={25} color={'#696767'} />
                            : <Icon name='eye' size={25} color={'#696767'} />}
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.loginButton} >
                <TextRoboto style={styles.loginText}>ENTRAR</TextRoboto>
            </TouchableOpacity>

            <View style={styles.subtitleContainer}>
                <TextPoppins style={{ fontSize: 17, letterSpacing: 1.5 }} regular>¿Ya tienes cuenta?, </TextPoppins>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <TextPoppins style={styles.subtitleText} bold>Iniciar Sesión</TextPoppins>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
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
        borderBottomColor: '#8A8888',
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