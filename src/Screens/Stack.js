import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from "./Signup";
import Login from "./Login";
import Initial from "./Initial";

const Stack = createNativeStackNavigator();

export default props=>{

    return(
        <Stack.Navigator initialRouteName="Signup" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Initial" component={Initial}></Stack.Screen>
        </Stack.Navigator>
    )
}