import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
//import { ScrollView } from "react-native-gesture-handler";


export default function Start(){

return(
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image source={require("../../assets/icons/logo3.png")} />
                <Text>
                    Vamos transformar sua vida {"\n"}em um jogo, buscando sempre {"\n"}{" "} o melhor nível.
                </Text>
            </View>
        </ScrollView>
    </View>
);
}