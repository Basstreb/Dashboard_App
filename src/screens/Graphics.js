import { StyleSheet, TouchableOpacity, FlatList, View, Text, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { TextOverpassBold } from '../utils/CustomFonts';
import { COLORS } from '../utils/Const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { bringAllCustomersApi } from '../api/CustomersApi';
import DataCard from '../components/DataCard';
import { useFocusEffect } from '@react-navigation/native';
import DataDisplayerCustomer from '../components/DataDisplayerCustomer';
import EarningsGraph from '../components/Graphs/EarningsGraph';
import TaxesGraph from '../components/Graphs/TaxesGraph';

export default function Graphics(props) {

  const { navigation } = props;
  const [customers, setCustomers] = useState(undefined);

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
        <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Gráficas</TextOverpassBold>
      ),
      headerStyle: {
        height: 100,
        backgroundColor: '#FFF',
      }
    })
  }, [navigation])

  return (
    <View style={styles.bg}>
      <ScrollView>
        <EarningsGraph />

        <TaxesGraph />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFF',
    height: '100%',
  },
})