import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextPoppins } from '../../utils/CustomFonts';
import DataDetailStaffCost from '../../components/DataDetailStaffCost';

export default function DataStaffCostDetails(props) {
    const staffCost = props.route.params;
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
                    onPress={() => navigation.navigate('StaffCosts')} />
            ),
            headerTitle: () => (
                <TextPoppins regular style={{ fontSize: 20, letterSpacing: 1, marginRight: Platform.OS === 'android' ? 0 : 160 }}>Detalles</TextPoppins>
            ),
        })
    }, [navigation])

    return (
        <View style={styles.bg}>
            <TextPoppins semiBold style={styles.title}>Gasto de Personal</TextPoppins>
            <DataDetailStaffCost staffCost={staffCost} />
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
