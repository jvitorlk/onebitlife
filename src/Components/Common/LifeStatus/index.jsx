import React from "react";
import { View, StyleSheet } from "react-native";

import Lottie from "lottie-react-native";

export default function LifeStatus() {
/* Status:
100 - Máximo 
50 - Médio
25 - baixo
00 - curto (Acabou o game)
No robô, nós temos primero a felicidade e depois a saúde xx-xx
*/

  return (
    <View style={styles.container}>
        <Lottie
        source={require("../../../assets/education/education-100.json")}
        autoPlay
        loop
        style={styles.educacaoAnimacao}
        />        
        <Lottie
        source={require("../../../assets/money/money-100.json")}
        autoPlay
        loop
        style={styles.financasAnimacao}
        />
        
        <Lottie
        source={require("../../../assets/robot/robot-100-100.json")}
        autoPlay
        loop
        style={styles.roboAnimacao}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  roboAnimacao: {
    width: 190,
    marginTop: 30,
    marginLeft: 25,
  },
  educacaoAnimacao: {
    width: 190,
    marginTop: 50,
    marginLeft: -10,
    position: "absolute",
  },
  financasAnimacao: {
    width: 190,
    marginTop: 50,
    marginLeft: 80,
    position: "absolute",
  },
})