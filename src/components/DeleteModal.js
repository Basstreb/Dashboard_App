import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { TextPoppins } from '../utils/CustomFonts';
import { deleteCustomerApi } from '../api/CustomersApi';
import { deleteOfferApi } from '../api/OffersApi';

export default function DeleteModal(props) {

  const { deleteModalVisible, closeDeleteModalVisible, closeOptionsModalVisible, id, customer, offer } = props;

  const deleteCustomer = async (id) => {
    let response;
    customer ? response = await deleteCustomerApi(id) : '';
    offer ? response = await deleteOfferApi(id) : '';
    if (typeof response === 'object') {
      closeDeleteModalVisible();
      closeOptionsModalVisible();
    }
  }

  return (
    <Modal
      style={{ margin: 0 }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={deleteModalVisible}
      coverScreen={true}
      hasBackdrop={true}
      backdropOpacity={0.5}
      onBackButtonPress={() => closeDeleteModalVisible()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextPoppins medium>¿Quieres eliminar el Cliente?</TextPoppins>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => closeDeleteModalVisible()}>
              <TextPoppins medium>Cancelar</TextPoppins>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteCustomer(id)}>
              <TextPoppins medium style={{ marginLeft: 20, color: '#ff0000' }}>Eliminar</TextPoppins>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  }
});
