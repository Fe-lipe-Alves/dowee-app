import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from "./Signup";
import Login from "./Login";
import Initial from "./Initial";
import NewPlaylist from "./NewPlaylist";
import User from "./User";

const Stack = createNativeStackNavigator();

export default props=>{

    return(
        <Stack.Navigator initialRouteName="Initial" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Initial" component={Initial}></Stack.Screen>
            <Stack.Screen name="NewPlaylist" component={NewPlaylist}></Stack.Screen>
            <Stack.Screen name="User" component={User}></Stack.Screen>
        </Stack.Navigator>
    )
}