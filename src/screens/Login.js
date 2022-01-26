import { View, Text, TextInput, Touchable, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/MerkinsioLogo.png';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { TextInputPoppins, TextOverpassBold, TextPoppins, TextRoboto } from '../utils/CustomFonts';

export default function Login(props) {

    const [seePassword, setSeePassword] = useState(true);

    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate('Register');
    }

    const goToHome = () => {
        navigation.navigate('Navigation');
    }

    return (
        <SafeAreaView style={styles.bg}>
            <TextOverpassBold style={styles.title}>BIENVENIDO</TextOverpassBold>
            <View style={styles.subtitleContainer}>
                <TextPoppins style={{ fontSize: 17, letterSpacing: 1.5 }} regular>¿No tienes cuenta?, </TextPoppins>
                <TouchableOpacity onPress={goToRegister} >
                    <TextPoppins style={styles.subtitleText} bold>Registrarse</TextPoppins>
                </TouchableOpacity>
            </View>
            <Image source={Logo} style={styles.image} />

            <View style={styles.inputContainer}>
                <TextInputPoppins
                    placeholder='Email'
                    style={styles.input}
                    placeholderTextColor={'#696767'}
                    autoCapitalize='none'
                    secureTextEntry={false}
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
                            <Feather name='eye-off' size={25} color={'#696767'} />
                            : <Feather name='eye' size={25} color={'#696767'} />}
                    </TouchableOpacity>
                </View>
            </View>

            {/* <TouchableOpacity>
                <TextPoppins medium style={styles.forgetText}>¿Olvidé mi contraseña?</TextPoppins>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.loginButton} onPress={goToHome} >
                <TextRoboto style={styles.loginText}>ENTRAR</TextRoboto>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFF',
        height: '100%',
    },
    title: {
        color: '#444B59',
        fontSize: 25,
        textAlign: 'center',
        marginTop: '20%',
        letterSpacing: 2,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    subtitleText: {
        fontSize: 17,
        color: '#0078B4',
        textDecorationLine: 'underline',
        letterSpacing: 1.5,
    },
    image: {
        marginTop: '15%',
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
        marginVertical: 30,
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
})