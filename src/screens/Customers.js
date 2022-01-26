import { View, Text, Button, ToastAndroid } from 'react-native';
import React from 'react';
import {toastMessage} from '../utils/ToastMessage';

export default function Customers() {

  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 60 }}>CLIENTES</Text>
      <Button title="Agregar cliente" onPress={() => toastMessage("Mensaje de error", "none")} />
    </View>
  );
}
