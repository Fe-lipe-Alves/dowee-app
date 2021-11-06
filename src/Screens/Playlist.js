import React from "react";
import { ScrollView, StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";
import styleBase from "../Assets/styleBase"

export default props => {

    return (
        <View style={[ {
            justifyContent: 'center',
            backgroundColor: "white",
            overflow: 'scroll',
          }, styleBase.container ]}
        >
            
        </View>

    )
}