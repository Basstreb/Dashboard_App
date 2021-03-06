import 'react-native-gesture-handler';
import * as React from 'react';
import { Text as RnText, TextInput as TiFont } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export function TextOverpassBold({ children, style }) {

    let [fontsLoaded, error] = useFonts({
        'Overpass-ExtraBold': require('../../assets/fonts/Overpass-ExtraBold.ttf'),
    });

    if (error) {
        console.error(error);
    }

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <RnText
            style={{ fontFamily: 'Overpass-ExtraBold', ...style }}>
            {children}
        </RnText>
    );
}

export function TextRoboto({ children, style }) {

    let [fontsLoaded, error] = useFonts({
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });

    if (error) {
        console.error(error);
    }

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <RnText
            style={{ fontFamily: 'Roboto-Bold', ...style }}>
            {children}
        </RnText>
    );
}

export function TextPoppins({ children, style, bold, regular, medium, semiBold, light }) {

    let [fontsLoaded, error] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    });

    if (error) {
        console.error(error);
    }

    if (!fontsLoaded) {
        return <AppLoading />
    }

    if (bold) {
        return (
            <RnText
                style={{ fontFamily: 'Poppins-Bold', ...style }}>
                {children}
            </RnText>
        );
    } else if (regular) {
        return (
            <RnText
                style={{ fontFamily: 'Poppins-Regular', ...style }}>
                {children}
            </RnText>
        );
    }
    else if (medium) {
        return (
            <RnText
                style={{ fontFamily: 'Poppins-Medium', ...style }}>
                {children}
            </RnText>
        );
    }
    else if (semiBold) {
        return (
            <RnText
                style={{ fontFamily: 'Poppins-SemiBold', ...style }}>
                {children}
            </RnText>
        );
    } else if (light) {
        return (
            <RnText
                style={{ fontFamily: 'Poppins-Light', ...style }}>
                {children}
            </RnText>
        );
    }
}

export function TextInputPoppins({
    style,
    regular,
    bold,
    placeholder,
    placeholderTextColor,
    autoCapitalize,
    secureTextEntry,
    value,
    onChangeText,
    editable,
    selectTextOnFocus,
    maxLength,
    keyboardType,
    onChange,
}) {

    let [fontsLoaded, error] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (error) {
        console.error(error);
    }

    if (!fontsLoaded) {
        return <AppLoading />
    }

    if (regular) {
        return (
            <TiFont
                placeholder={placeholder}
                style={{ fontFamily: 'Poppins-Regular', ...style }}
                placeholderTextColor={placeholderTextColor}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                editable={editable}
                selectTextOnFocus={selectTextOnFocus}
                maxLength={maxLength}
                keyboardType={keyboardType}
                onChange={onChange}
            />
        );
    } else if (bold) {
        return (
            <TiFont
                placeholder={placeholder}
                style={{ fontFamily: 'Poppins-Bold', ...style }}
                placeholderTextColor={placeholderTextColor}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                editable={editable}
                selectTextOnFocus={selectTextOnFocus}
                maxLength={maxLength}
                onChange={onChange}
            />
        );
    }
}
