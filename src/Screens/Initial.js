import React from "react"
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from "react-native"
import Header from "../Components/Header"
import Icon from 'react-native-vector-icons/FontAwesome'
import styleBase from '../Assets/styleBase'
import CollectionHorizontal from '../Components/CollectionHorizontal'
import MiniCollection from "../Components/MiniCollection"

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

    const recommended = {
        items: [
            {
                image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/e0dd8263dfed37c50a868abbf65fd7da/264x264-000000-80-0-0.jpg" },
                title: 'Coldplay',
                subTitle: 'Mylo Xiloto'
            },
            {
                image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/abd80096fd0b6552251c23b57f0e964f/264x264-000000-80-0-0.jpg" },
                title: 'Henrique e Juliano',
                subTitle: 'Acordo'
            },
            {
                image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/e718cfa1a7619789e01a6493f74ea979/264x264-000000-80-0-0.jpg" },
                title: 'Carol Biazin',
                subTitle: 'Beijo De Judas'
            },
            {
                image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/3e405edf128e11fa50752487848f03ac/264x264-000000-80-0-0.jpg" },
                title: 'Devault',
                subTitle: 'Empty Room EP'
            },
            {
                image: { uri: "https://e-cdns-images.dzcdn.net/images/cover/3e405edf128e11fa50752487848f03ac/264x264-000000-80-0-0.jpg" },
                title: 'Devault',
                subTitle: 'Empty Room EP'
            },
        ],
        click: () => {
            console.log('clicou')
            //props.navigation.navigate('Playlist')
        }
    }

    return (

        <View style={[{
            justifyContent: 'center',
            backgroundColor: "white",
            overflow: 'scroll'
          }, styleBase.container ]}
        >
            <ScrollView  showsVerticalScrollIndicator={ false } >

            <Header title="Musicas" { ...props } />

            <CollectionHorizontal collection={ collection } title="Minhas Playlists">
            </CollectionHorizontal>

            <CollectionHorizontal collection={ [].concat(collection).reverse() } title="Playlists Recomendadas">
            </CollectionHorizontal>

            <MiniCollection collection={ recommended } title="Playlists Recomendadas">
            </MiniCollection>

           </ScrollView>

        </View>

    )
}