import React from "react"
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from "react-native"
import Header from "../Components/Header"
import Icon from 'react-native-vector-icons/FontAwesome'
import styleBase from '../Assets/styleBase'
import CollectionHorizontal from '../Components/CollectionHorizontal'

export default props => {

    const collection = [
        {
            image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/e0dd8263dfed37c50a868abbf65fd7da/264x264-000000-80-0-0.jpg" }
        },
        {
            image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/abd80096fd0b6552251c23b57f0e964f/264x264-000000-80-0-0.jpg" }
        },
        {
            image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/e718cfa1a7619789e01a6493f74ea979/264x264-000000-80-0-0.jpg" }
        },
        {
            image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/3e405edf128e11fa50752487848f03ac/264x264-000000-80-0-0.jpg" }
        },

    ]

    return (

        <View style={[{
            justifyContent: 'center',
            backgroundColor: "white",
            overflow: 'scroll'
          }, styleBase.container ]}
        >
            <ScrollView>

            <Header title="Musicas" />

            <CollectionHorizontal collection={ collection } title="Minhas Playlists">
            </CollectionHorizontal>

           </ScrollView>

        </View>

    )
}