import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { TextOverpassBold, TextPoppins } from '../../utils/CustomFonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../utils/Const';
import { useFocusEffect } from '@react-navigation/native';
import { bringIvaRepercuted } from '../../api/TaxesApi';
import DataDisplayerTaxes from '../../components/DataDisplayerTaxes';
import DataCard from '../../components/DataCard';

export default function TaxesRepercuted(props) {

    const { navigation } = props;
    const [repercutedTaxes, setRepercutedTaxes] = useState();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const response = await bringIvaRepercuted();
                    setRepercutedTaxes(response);
                } catch (error) {
                    console.error(error);
                }
            })();
        }, [repercutedTaxes])
    )

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Repercutido</TextOverpassBold>
            ),
            headerStyle: {
                height: 100,
                backgroundColor: '#FFF',
            }
        })
    }, [navigation])

    return (
        <View style={styles.bg}>
            <View style={styles.taxesMenu}>
                <TouchableOpacity onPress={() => navigation.navigate('SupportedTaxes')}>
                    <TextPoppins semiBold>Soportado</TextPoppins>
                </TouchableOpacity>
                <View>
                    <TextPoppins semiBold>Repercutido</TextPoppins>
                    <View style={styles.focusView} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('PaidTaxes')}>
                    <TextPoppins semiBold>Pagado</TextPoppins>
                </TouchableOpacity>
            </View>

            <FlatList
                data={repercutedTaxes}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(repercutedTaxe) => String(repercutedTaxe.id)}
                style={{ marginTop: 10 }}
                renderItem={({ item }) =>
                    <DataCard>
                        <DataDisplayerTaxes taxes={item} />
                    </DataCard>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    taxesMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    focusView: {
        borderBottomWidth: 5,
        borderBottomColor: '#0078B4',
        top: 13,
        marginTop: -5,
        borderRadius: 5,
    },
})