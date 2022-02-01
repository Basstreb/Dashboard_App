import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/MerkinsioLogo.png';
import { useNavigation } from '@react-navigation/native';
import { TextOverpassBold, TextPoppins, TextRoboto } from '../utils/CustomFonts';
import LoginForm from '../components/Auth/LoginForm';

export default function Login() {

    const [seePassword, setSeePassword] = useState(true);

    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate('Register');
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

            <LoginForm />
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
})