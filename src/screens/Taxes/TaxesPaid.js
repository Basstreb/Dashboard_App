import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { TextOverpassBold, TextPoppins } from '../../utils/CustomFonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../utils/Const';
import { useFocusEffect } from '@react-navigation/native';
import { bringIvaPaid, bringIvaTotal } from '../../api/TaxesApi';
import DataCard from '../../components/DataCard';
import DataDisplayerTaxes from '../../components/DataDisplayerTaxes';

export default function TaxesPaid(props) {

    const { navigation } = props;
    const [paidTaxes, setPaidTaxes] = useState();
    const [totalTaxes, setTotalTaxes] = useState();
    const [payTaxModalVisible, setPayTaxModalVisible] = useState(false);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const paidTaxesResponse = await bringIvaPaid();
                    const totalTaxesResponse = await bringIvaTotal();
                    setPaidTaxes(paidTaxesResponse);
                    setTotalTaxes(totalTaxesResponse);
                } catch (error) {
                    console.error(error);
                }
            })();
        }, [paidTaxes])
    )

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Pagado</TextOverpassBold>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateTaxes', totalTaxes && totalTaxes)}>
                    <Icon
                        name="plus"
                        size={30}
                        color="#fff"
                        style={{
                            borderRadius: 5,
                            marginRight: 20,
                            backgroundColor: COLORS.merkinsio,
                            paddingVertical: 3,
                            paddingHorizontal: 6,
                            overflow: 'hidden',
                        }} />
                </TouchableOpacity>
            ),
            headerStyle: {
                height: 100,
                backgroundColor: '#FFF',
            }
        })
    }, [navigation, totalTaxes])

    return (
        <View style={styles.bg}>
            <View style={styles.taxesMenu}>
                <TouchableOpacity onPress={() => navigation.navigate('SupportedTaxes')}>
                    <TextPoppins semiBold>Soportado</TextPoppins>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RepercutedTaxes')}>
                    <TextPoppins semiBold>Repercutido</TextPoppins>
                </TouchableOpacity>
                <View>
                    <TextPoppins semiBold>Pagado</TextPoppins>
                    <View style={styles.focusView} />
                </View>
            </View>

            <FlatList
                data={paidTaxes}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(paidTaxe) => String(paidTaxe.id)}
                style={{ marginTop: 10 }}
                renderItem={({ item }) =>
                    <DataCard>
                        <DataDisplayerTaxes taxes={item} />
                    </DataCard>}
            />
        </View >
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