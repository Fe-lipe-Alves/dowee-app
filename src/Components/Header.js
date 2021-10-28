import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import styleBase from '../Assets/styleBase'

export default props => {
    // variáveis padrões. Usado caso não seja informado as propriedades
    const propsDefault = {
        title: '',
    }

    // Atualiza as propriedades padões
    props = { ...propsDefault, ...props }

    const styles = StyleSheet.create({
        header: {
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignContent: 'space-between',
        },
        title: {
            fontSize: 25,
            fontWeight: '700',
            flex: 1,
            color: 'black',
            paddingVertical: 5,
            fontWeight: '300'
        },
        icon: {
            fontSize: 20,
            marginHorizontal: 8
        }
    })

    return (
        <View style={ styles.header }>
            <Text style={ styles.title }>{ props.title }</Text>
            
            <View style={ styleBase.row }>
                <Icon name="plus" style={ styles.icon } onPress={ p => {
                        props.navigation.goBack()
                    }}
                >
                </Icon>
                <Icon name="user-o" style={ styles.icon } onPress={ p => {
                        props.navigation.goBack()
                    }}
                >
                </Icon>
            </View>
        </View>
    )
}