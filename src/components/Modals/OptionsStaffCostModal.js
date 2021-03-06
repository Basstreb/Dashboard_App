import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { TextPoppins } from "../../utils/CustomFonts";
import DeleteSVG from "../../utils/svg/DeleteSVG";
import DetailsSVG from "../../utils/svg/DetailsSVG";
import EditSVG from "../../utils/svg/EditSVG";
import DeleteModal from "./DeleteStaffCostModal";

export default function OptionsStaffCostModal(props) {
    const { optionsModalVisible, closeOptionsModalVisible, id, staffCost } = props;
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <Modal
            style={{ margin: 0 }}
            isVisible={optionsModalVisible}
            hasBackdrop={true}
            backdropOpacity={0.5}
            swipeDirection="down"
            onSwipeComplete={() => closeOptionsModalVisible()}
            onBackButtonPress={() => closeOptionsModalVisible()}
            onBackdropPress={() => closeOptionsModalVisible()}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>


                    <View style={styles.lineStyleFirst}>
                        <View style={{ width: 70, height: 25 }}>
                            <DetailsSVG fill='#9B9999' />
                        </View>
                        <TouchableOpacity onPress={() => {
                            closeOptionsModalVisible();
                            navigation.navigate('StaffCostsDetails', staffCost)
                        }}>
                            <TextPoppins medium style={styles.poppinsStyle}>Ver detalles</TextPoppins>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lineStyle}>
                        <View style={{ width: 70, height: 35 }}>
                            <EditSVG style={{ marginLeft: 2 }} />
                        </View>
                        <TouchableOpacity onPress={() => {
                            closeOptionsModalVisible();
                            navigation.navigate('EditStaffCosts', staffCost)
                        }}>
                            <TextPoppins medium style={styles.poppinsStyle}>Editar</TextPoppins>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lineStyle}>
                        <View style={{ width: 70, height: 40 }}>
                            <DeleteSVG fill='#9B9999' />
                        </View>
                        <TouchableOpacity onPress={() => setDeleteModalVisible(true)} >
                            <TextPoppins medium style={styles.poppinsStyleRed}>Eliminar</TextPoppins>
                        </TouchableOpacity>
                    </View>

                    <DeleteModal
                        id={id}
                        deleteModalVisible={deleteModalVisible}
                        closeOptionsModalVisible={() => closeOptionsModalVisible()}
                        closeDeleteModalVisible={() => setDeleteModalVisible(false)} />

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
        marginTop: 620,
        backgroundColor: "white",
        borderTopStartRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 35,
        // alignItems: "center",
        width: '100%',
    },
    lineStyleFirst: {
        flexDirection: "row",
        borderBottomColor: "#9B9999",
        borderBottomWidth: 1,
        alignItems: "center",
        marginBottom: 30,
        paddingVertical: 20,
    },
    lineStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },
    poppinsStyle: {
        fontSize: 18,
        letterSpacing: 1,
        color: '#5F5F5F',
    },
    poppinsStyleRed: {
        fontSize: 18,
        letterSpacing: 1,
        color: 'red',
    },
});