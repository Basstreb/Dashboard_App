import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { TextOverpassBold } from '../utils/CustomFonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../utils/Const';
import { bringAllOffersApi } from '../api/OffersApi';
import { useFocusEffect } from '@react-navigation/native';
import DataDisplayerOffer from '../components/DataDisplayerOffer';
import DataCard from '../components/DataCard';

export default function Offers(props) {

  const { navigation } = props;
  const [offers, setOffers] = useState(undefined);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await bringAllOffersApi();
          setOffers(response);
        } catch (error) {
          console.error(error);
        }
      })();
    }, [offers])
  )

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TextOverpassBold style={{ fontSize: 25, marginLeft: 20, letterSpacing: 2, color: COLORS.merkinsio }}>Ofertas</TextOverpassBold>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('CreateOffer')}>
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
        data={offers}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(offer) => String(offer.id)}
        renderItem={({ item }) =>
          <DataCard>
            <DataDisplayerOffer offer={item} />
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