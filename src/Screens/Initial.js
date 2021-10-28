import React from "react"
import { View, Text, Button, StyleSheet, ScrollView } from "react-native"
import Header from "../Components/Header"
import Icon from 'react-native-vector-icons/FontAwesome'
import styleBase from '../Assets/styleBase'

export default props => {

    return (

        <View style={[{
            justifyContent: 'center',
            backgroundColor: "white",
            overflow: 'scroll'
          }, styleBase.container ]}
        >
            <ScrollView>

            <Header title="Musicas" />

            {/* Inicio Minhas Playlists */}
           <View style={ styleBase.container }>
                <View style={ styleBase.row }>
                    <Text style={ styleBase.titleArea } onPress={ p => { props.navigation.goBack() }} >
                        Minhas playlists
                    </Text>
                    
                    <Icon 
                        name="chevron-right" 
                        style={ styleBase.titleArea.icon }
                        onPress={ p => {
                            props.navigation.goBack()
                        }} 
                    />
                </View>

                <View style={ styleBase.row }>
                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>

                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>

                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>

                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>
                </View>
           </View>
           {/* Fim Minhas Playlists */}

           {/* Inicio Recomendadas */}
           <View style={ styleBase.container }>
                <View style={ styleBase.row }>
                    <Text style={ styleBase.titleArea } onPress={ p => { props.navigation.goBack() }} >
                        Recomedadas
                    </Text>
                    
                    <Icon 
                        name="chevron-right" 
                        style={ styleBase.titleArea.icon }
                        onPress={ p => {
                            props.navigation.goBack()
                        }} 
                    />
                </View>

                <View style={ styleBase.row }>
                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>

                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>

                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>

                    <View style={ styleBase.cover }>
                        <View style={ styleBase.cover.box }>
                            <Text >Playlist</Text>
                        </View>
                    </View>
                </View>
           </View>
           {/* Inicio Recomendadas */}

           </ScrollView>

        </View>

    )
}