import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { TextPoppins } from '../../utils/CustomFonts';
import { deleteCommonCost } from '../../api/CostsApi';
import * as SplashScren from 'expo-splash-screen';

export default function DeleteCommonCostModal(props) {

    const { deleteModalVisible, closeDeleteModalVisible, closeOptionsModalVisible, id } = props;
    SplashScren.preventAutoHideAsync();

    const deleteCustomer = async (id) => {
        const response = await deleteCommonCost(id);
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
                    <TextPoppins medium>¿Quieres eliminar el Gasto?</TextPoppins>
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
