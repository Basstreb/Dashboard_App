import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextPoppins } from '../../utils/CustomFonts';
import DataDetailCommonCost from '../../components/DataDetailCommonCost';

export default function DataCommonCostDetails(props) {
    const commonCost = props.route.params;
    const { navigation } = props;

    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                height: 100,
                backgroundColor: '#FFF',
            },
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    size={30}
                    color="#000000"
                    style={{ marginLeft: 20 }}
                    onPress={() => navigation.navigate('CommonCosts')} />
            ),
            headerTitle: () => (
                <TextPoppins regular style={{ fontSize: 20, letterSpacing: 1, marginRight: Platform.OS === 'android' ? 0 : 160 }}>Detalles</TextPoppins>
            ),
        })
    }, [navigation])

    return (
        <View style={styles.bg}>
            <TextPoppins semiBold style={styles.title}>Gasto Común</TextPoppins>
            <DataDetailCommonCost commonCost={commonCost} />
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFF',
        height: '100%',
    },
    title: {
        fontSize: 22,
        letterSpacing: 1,
        marginTop: 40,
        marginLeft: 20,
    },
});
