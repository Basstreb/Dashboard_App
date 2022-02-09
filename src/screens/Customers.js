import { StyleSheet, TouchableOpacity, FlatList, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { TextOverpassBold } from '../utils/CustomFonts';
import { COLORS } from '../utils/Const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { bringAllCustomersApi } from '../api/CustomersApi';
import DataCard from '../components/DataCard';
import { useFocusEffect } from '@react-navigation/native';
import DataDisplayerCustomer from '../components/DataDisplayerCustomer';

export default function Customers(props) {

  const { navigation } = props;
  const [customers, setCustomers] = useState(undefined);
  const createCustomer = {
    action: 'create',
    customer: true,
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await bringAllCustomersApi();
          setCustomers(response);
        } catch (error) {
          console.error(error);
        }
      })();
    }, [customers])
  )

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Clientes</TextOverpassBold>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('CreateCustomer', createCustomer)}>
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
      <FlatList
        data={customers}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(customer) => String(customer.id)}
        renderItem={({ item }) =>
          <DataCard>
            <DataDisplayerCustomer customer={item} />
          </DataCard>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFF',
    height: '100%',
  },
})