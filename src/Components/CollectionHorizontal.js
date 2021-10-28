import React from "react"
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from "react-native"
import Header from "../Components/Header"
import Icon from 'react-native-vector-icons/FontAwesome'
import styleBase from '../Assets/styleBase'

export default props => {
    
    return (
        <View style={ [styleBase.container, { marginBottom: 10 }] }>
            <View style={ styleBase.row }>
                <Text style={ styleBase.titleArea } onPress={ p => { props.navigation.goBack() }} >
                    { props.title }
                </Text>
                
                <Icon 
                    name="chevron-right" 
                    style={ styleBase.titleAreaIcon }
                    onPress={ p => {
                        props.navigation.goBack()
                    }} 
                />
            </View>

            {/* <View > */}
            <ScrollView
                horizontal={true} 
                style={ [styleBase.row, { flexWrap: 'nowrap' }] }
            >

                { props.collection.map((item, key) => {
                    return (
                        <View style={ styleBase.cover } key={key}>
                            <View style={ styleBase.coverBox }>
                                <ImageBackground 
                                    source={ item.image } 
                                    style={ styleBase.coverImage }
                                >
                                </ImageBackground>
                            </View>
                        </View>
                    );
                }) }

            </ScrollView>
        </View>
    )
}