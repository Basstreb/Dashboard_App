import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { TextOverpassBold, TextPoppins } from '../../utils/CustomFonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../utils/Const';
import DataCard from '../../components/DataCard';
import { bringIvaSupported, bringIvaTotal } from '../../api/TaxesApi';
import { useFocusEffect } from '@react-navigation/native';
import DataDisplayerTaxes from '../../components/DataDisplayerTaxes';

export default function TaxesSupported(props) {

    const { navigation } = props;
    const [supportedTaxes, setSupportedTaxes] = useState();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const supportedTaxesResponse = await bringIvaSupported();
                    setSupportedTaxes(supportedTaxesResponse);
                } catch (error) {
                    console.error(error);
                }
            })();
        }, [supportedTaxes])
    )

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Soportado</TextOverpassBold>
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
                <View>
                    <TextPoppins semiBold>Soportado</TextPoppins>
                    <View style={styles.focusView} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('RepercutedTaxes')}>
                    <TextPoppins semiBold>Repercutido</TextPoppins>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PaidTaxes')}>
                    <TextPoppins semiBold>Pagado</TextPoppins>
                </TouchableOpacity>
            </View>

            <FlatList
                data={supportedTaxes}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(supportedTaxe) => String(supportedTaxe.id)}
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