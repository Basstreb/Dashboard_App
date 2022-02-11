import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { TextOverpassBold, TextPoppins } from '../../utils/CustomFonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../utils/Const';
import { bringCommonCosts } from '../../api/CostsApi';
import { useFocusEffect } from '@react-navigation/native';
import DataCard from '../../components/DataCard';
import DataDisplayerCommonCosts from '../../components/DataDisplayerCommonCosts';

export default function CommonCosts(props) {

    const { navigation } = props;
    const [commonCosts, setCommonCosts] = useState(undefined);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const commonCostsRespone = await bringCommonCosts();
                    setCommonCosts(commonCostsRespone);
                } catch (error) {
                    console.error(error);
                }
            })();
        }, [commonCosts])
    )

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Gastos comunes</TextOverpassBold>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("CreateCommonCost")}>
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
                <View>
                    <TextPoppins semiBold>Comunes</TextPoppins>
                    <View style={styles.focusView} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('StaffCosts')}>
                    <TextPoppins semiBold>Personales</TextPoppins>
                </TouchableOpacity>
            </View>

            <FlatList
                data={commonCosts}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(commonCost) => String(commonCost.id)}
                style={{ marginTop: 10 }}
                renderItem={({ item }) =>
                    <DataCard>
                        <DataDisplayerCommonCosts commonCost={item} />
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