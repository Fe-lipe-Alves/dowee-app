import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {

    return (
        <Icon.Button 
            name="home"
            onPress={ p => {
                props.navigation.go('Login')
            }}
        >
            <Text>home</Text>
        </Icon.Button>
    )
}