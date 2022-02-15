import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { VictoryBar, VictoryGroup, VictoryChart, VictoryAxis, VictoryTheme } from "victory-native";
import { bringMonthIvaPaid, bringMonthIvaRepercuted, bringMonthIvaSupported } from "../../api/GraphsApi";
import { calculateMonthIvaAcumlatedData, calculateMonthIvaPaidData, calculateMonthIvaRepercutedData, calculateMonthIvaSupportedData } from "../../utils/CalculateMonthData";
import { TextPoppins } from "../../utils/CustomFonts";

export default function TaxesGraph() {

  const [ivaSupported, setIvaSupported] = useState();
  const [ivaRepercuted, setIvaRepercuted] = useState();
  const [ivaPaid, setIvaPaid] = useState();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const responseIvaSupported = await bringMonthIvaSupported();
          const responseIvaRepercuted = await bringMonthIvaRepercuted();
          const responseIvaPaid = await bringMonthIvaPaid();
          setIvaSupported(responseIvaSupported);
          setIvaRepercuted(responseIvaRepercuted);
          setIvaPaid(responseIvaPaid);
        } catch (error) {
          console.error(error);
        }
      })();
    }, [ivaSupported, ivaRepercuted, ivaPaid])
  )

  const dataIvaSupported = calculateMonthIvaSupportedData(ivaSupported);
  const dataIvaRepercuted = calculateMonthIvaRepercutedData(ivaRepercuted);
  const dataIvaPaid = calculateMonthIvaPaidData(ivaPaid);
  const dataIvaAcumulated = calculateMonthIvaAcumlatedData(ivaSupported, ivaRepercuted, ivaPaid);


  return (
    <>
      <TextPoppins semiBold style={styles.title}>IVA</TextPoppins>
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
                { x: 'Enero', y: dataIvaSupported[0] },
                { x: 'Febrero', y: dataIvaSupported[1] },
                { x: 'Marzo', y: dataIvaSupported[2] },
                { x: 'Abril', y: dataIvaSupported[3] },
                { x: 'Mayo', y: dataIvaSupported[4] },
                { x: 'Junio', y: dataIvaSupported[5] },
                { x: 'Julio', y: dataIvaSupported[6] },
                { x: 'Agosto', y: dataIvaSupported[7] },
                { x: 'Sept.', y: dataIvaSupported[8] },
                { x: 'Octubre', y: dataIvaSupported[9] },
                { x: 'Nov.', y: dataIvaSupported[10] },
                { x: 'Dic.', y: dataIvaSupported[11] },
              ]}
            />
            <VictoryBar
              alignment="start"
              data={[
                { x: 'Enero', y: dataIvaRepercuted[0] },
                { x: 'Febrero', y: dataIvaRepercuted[1] },
                { x: 'Marzo', y: dataIvaRepercuted[2] },
                { x: 'Abril', y: dataIvaRepercuted[3] },
                { x: 'Mayo', y: dataIvaRepercuted[4] },
                { x: 'Junio', y: dataIvaRepercuted[5] },
                { x: 'Julio', y: dataIvaRepercuted[6] },
                { x: 'Agosto', y: dataIvaRepercuted[7] },
                { x: 'Sept.', y: dataIvaRepercuted[8] },
                { x: 'Octubre', y: dataIvaRepercuted[9] },
                { x: 'Nov.', y: dataIvaRepercuted[10] },
                { x: 'Dic.', y: dataIvaRepercuted[11] }
              ]}
            />
            <VictoryBar
              alignment="start"
              data={[
                { x: 'Enero', y: dataIvaPaid[0] },
                { x: 'Febrero', y: dataIvaPaid[1] },
                { x: 'Marzo', y: dataIvaPaid[2] },
                { x: 'Abril', y: dataIvaPaid[3] },
                { x: 'Mayo', y: dataIvaPaid[4] },
                { x: 'Junio', y: dataIvaPaid[5] },
                { x: 'Julio', y: dataIvaPaid[6] },
                { x: 'Agosto', y: dataIvaPaid[7] },
                { x: 'Sept.', y: dataIvaPaid[8] },
                { x: 'Octubre', y: dataIvaPaid[9] },
                { x: 'Nov.', y: dataIvaPaid[10] },
                { x: 'Dic.', y: dataIvaPaid[11] }
              ]}
            />
            <VictoryBar
              alignment="start"
              data={[
                { x: 'Enero', y: dataIvaAcumulated[0] },
                { x: 'Febrero', y: dataIvaAcumulated[1] },
                { x: 'Marzo', y: dataIvaAcumulated[2] },
                { x: 'Abril', y: dataIvaAcumulated[3] },
                { x: 'Mayo', y: dataIvaAcumulated[4] },
                { x: 'Junio', y: dataIvaAcumulated[5] },
                { x: 'Julio', y: dataIvaAcumulated[6] },
                { x: 'Agosto', y: dataIvaAcumulated[7] },
                { x: 'Sept.', y: dataIvaAcumulated[8] },
                { x: 'Octubre', y: dataIvaAcumulated[9] },
                { x: 'Nov.', y: dataIvaAcumulated[10] },
                { x: 'Dic.', y: dataIvaAcumulated[11] }
              ]}
            />
          </VictoryGroup>
        </VictoryChart>
      </ScrollView >
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: -30,
  }
})