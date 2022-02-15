import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { VictoryBar, VictoryGroup, VictoryChart, VictoryAxis, VictoryTheme } from "victory-native";
import { bringMonthCostData, bringMonthData, bringMonthStaffData } from "../../api/GraphsApi";
import { calculateMonthCostData, calculateMonthData, calculateMonthStaffData } from "../../utils/CalculateMonthData";
import { TextPoppins } from "../../utils/CustomFonts";

export default function EarningsGraph() {

    const [offersMonthData, setOffersMonthData] = useState([]);
    const [offersMonthCostData, setOffersMonthCostData] = useState([]);
    const [offersMonthStaffData, setOffersMonthStaffData] = useState([]);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const responseMonthData = await bringMonthData();
                    const responseMonthCostData = await bringMonthCostData();
                    const responseMonthStaffData = await bringMonthStaffData();
                    setOffersMonthData(responseMonthData);
                    setOffersMonthCostData(responseMonthCostData);
                    setOffersMonthStaffData(responseMonthStaffData);
                } catch (error) {
                    console.error(error);
                }
            })();
        }, [offersMonthData])
    )

    const dataTotal = calculateMonthData(offersMonthData);
    const dataCost = calculateMonthCostData(offersMonthCostData);
    const dataStaff = calculateMonthStaffData(offersMonthStaffData);

    return (
        <>
            <TextPoppins semiBold style={styles.earnings}>Ganancia total: 10000€</TextPoppins>
            <TextPoppins semiBold style={styles.title}>Ganancias</TextPoppins>
            <ScrollView horizontal={true}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    // domain={{ y: [0.5, 5.5] }}
                    width={650}
                >
                    <VictoryGroup
                        offset={10}
                        style={{ data: { width: 9 } }}
                        colorScale={["#4199D6", "#F4C766", "#7A61B9", "#39A766"]}
                    >
                        <VictoryBar
                            alignment="start"
                            data={[
                                { x: 'Enero', y: dataTotal[0] },
                                { x: 'Febrero', y: dataTotal[1] },
                                { x: 'Marzo', y: dataTotal[2] },
                                { x: 'Abril', y: dataTotal[3] },
                                { x: 'Mayo', y: dataTotal[4] },
                                { x: 'Junio', y: dataTotal[5] },
                                { x: 'Julio', y: dataTotal[6] },
                                { x: 'Agosto', y: dataTotal[7] },
                                { x: 'Sept.', y: dataTotal[8] },
                                { x: 'Octubre', y: dataTotal[9] },
                                { x: 'Nov.', y: dataTotal[10] },
                                { x: 'Dic.', y: dataTotal[11] },
                            ]}
                        />
                        <VictoryBar
                            alignment="start"
                            data={[
                                { x: 'Enero', y: dataCost[0] },
                                { x: 'Febrero', y: dataCost[1] },
                                { x: 'Marzo', y: dataCost[2] },
                                { x: 'Abril', y: dataCost[3] },
                                { x: 'Mayo', y: dataCost[4] },
                                { x: 'Junio', y: dataCost[5] },
                                { x: 'Julio', y: dataCost[6] },
                                { x: 'Agosto', y: dataCost[7] },
                                { x: 'Sept.', y: dataCost[8] },
                                { x: 'Octubre', y: dataCost[9] },
                                { x: 'Nov.', y: dataCost[10] },
                                { x: 'Dic.', y: dataCost[11] }
                            ]}
                        />
                        <VictoryBar
                            alignment="start"
                            data={[
                                { x: 'Enero', y: dataStaff[0] },
                                { x: 'Febrero', y: dataStaff[1] },
                                { x: 'Marzo', y: dataStaff[2] },
                                { x: 'Abril', y: dataStaff[3] },
                                { x: 'Mayo', y: dataStaff[4] },
                                { x: 'Junio', y: dataStaff[5] },
                                { x: 'Julio', y: dataStaff[6] },
                                { x: 'Agosto', y: dataStaff[7] },
                                { x: 'Sept.', y: dataStaff[8] },
                                { x: 'Octubre', y: dataStaff[9] },
                                { x: 'Nov.', y: dataStaff[10] },
                                { x: 'Dic.', y: dataStaff[11] }
                            ]}
                        />
                        <VictoryBar
                            alignment="start"
                            data={[
                                { x: 'Enero', y: dataTotal[0] - dataCost[0] - dataStaff[0] },
                                { x: 'Febrero', y: dataTotal[1] - dataCost[1] - dataStaff[1] },
                                { x: 'Marzo', y: dataTotal[2] - dataCost[2] - dataStaff[2] },
                                { x: 'Abril', y: dataTotal[3] - dataCost[3] - dataStaff[3] },
                                { x: 'Mayo', y: dataTotal[4] - dataCost[4] - dataStaff[4] },
                                { x: 'Junio', y: dataTotal[5] - dataCost[5] - dataStaff[5] },
                                { x: 'Julio', y: dataTotal[6] - dataCost[6] - dataStaff[6] },
                                { x: 'Agosto', y: dataTotal[7] - dataCost[7] - dataStaff[7] },
                                { x: 'Sept.', y: dataTotal[8] - dataCost[8] - dataStaff[8] },
                                { x: 'Octubre', y: dataTotal[9] - dataCost[9] - dataStaff[9] },
                                { x: 'Nov.', y: dataTotal[10] - dataCost[10] - dataStaff[10] },
                                { x: 'Dic.', y: dataTotal[11] - dataCost[11] - dataStaff[11] }
                            ]}
                        />
                    </VictoryGroup>
                </VictoryChart>
            </ScrollView >
        </>
    )
}

const styles = StyleSheet.create({
    earnings: {
        fontSize: 22,
        letterSpacing: 1,
        marginTop: 20,
        marginLeft: 20,
        alignSelf: 'flex-end',
    },
    title: {
        fontSize: 16,
        letterSpacing: 1,
        marginTop: 10,
        marginLeft: 20,
        marginBottom: -30,
    },
})