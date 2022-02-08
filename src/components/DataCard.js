import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function DataCard({ children }) {

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5
        ,
        alignSelf: 'center',
        width: '90%',
        borderRadius: 16,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
    },
})