import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/FontAwesome'
import Initial from "./Initial"
import Login from "./Login"

export default props => {
    const nav = createBottomTabNavigator()

    return(
        <nav.Navigator 
            screenOptions={ ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Initial') {
                        iconName = focused ? 'star' : 'star-o'
                    } else if (route.name === 'Login') {
                        iconName = focused ? 'star' : 'star-o'
                    }

                    return <Ionicons name={ iconName } size={ size } color={ color } />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }) }
            initialRouteName="Initial"
        >  
            <nav.Screen name="Initial" component={ Initial } />
            <nav.Screen name="Login" component={ Login } />
        </nav.Navigator>
    )
}
