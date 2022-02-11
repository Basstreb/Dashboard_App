import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { TextOverpassBold, TextPoppins } from '../../utils/CustomFonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../utils/Const';
import { useFocusEffect } from '@react-navigation/core';
import { bringStaffCosts } from '../../api/CostsApi';
import DataCard from '../../components/DataCard';
import DataDisplayerStaffCosts from '../../components/DataDisplayerStaffCosts';

export default function StaffCosts(props) {

    const { navigation } = props;
    const [staffCosts, setStaffCosts] = useState(undefined);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const staffCostsRespone = await bringStaffCosts();
                    setStaffCosts(staffCostsRespone);
                } catch (error) {
                    console.error(error);
                }
            })();
        }, [staffCosts])
    )

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Gastos de personal</TextOverpassBold>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateStaffCosts')}>
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
    }, [navigation])

    return (
        <View style={styles.bg}>
            <View style={styles.taxesMenu}>
                <TouchableOpacity onPress={() => navigation.navigate('CommonCosts')}>
                    <TextPoppins semiBold>Comunes</TextPoppins>
                </TouchableOpacity>
                <View>
                    <TextPoppins semiBold>Personales</TextPoppins>
                    <View style={styles.focusView} />
                </View>
            </View>

            <FlatList
                data={staffCosts}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(staffCost) => String(staffCost.id)}
                style={{ marginTop: 10 }}
                renderItem={({ item }) =>
                    <DataCard>
                        <DataDisplayerStaffCosts staffCost={item} />
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
        paddingHorizontal: 70,
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