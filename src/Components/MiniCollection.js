import React from "react"
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native"
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
                
                { 
                    ( () => {
                        if (!(props.hasOwnProperty('noChevron')) && (!!props.noChevron)) {
                            return (
                                <View style={ styleBase.titleAreaIconBox }>
                                    <Icon 
                                        name="chevron-right" 
                                        style={ styleBase.titleAreaIcon }
                                        onPress={ p => {
                                            props.navigation.goBack()
                                        }} 
                                    />
                                </View>
                            )
                        }
                    })()
                }
            </View>

            <View style={ styleBase.row }>
                { props.collection.items.map((item, key) => {
                    
                    return (
                        <TouchableOpacity onPress={ p => { console.log('ola') } } style={ [styleBase.miniCollection, styleBase.row] }  key={key}>
                            {/* <View > */}
                                <View style={ styleBase.miniCover }>
                                    <View style={ styleBase.coverBox }>
                                        <ImageBackground 
                                            source={ item.image } 
                                            style={ styleBase.coverImage }
                                        >
                                        </ImageBackground>
                                    </View>
                                </View>

                                <View style={ styleBase.miniCollectionLegend }>
                                    <Text style={ styleBase.miniCollectionTitle }>{ item.title }</Text>
                                    <Text style={ styleBase.miniCollectionSubtitle }>{ item.subTitle }</Text>
                                </View>
                            {/* </View> */}
                        </TouchableOpacity>
                    );
                }) }
            </View>
        </View>
    )
}