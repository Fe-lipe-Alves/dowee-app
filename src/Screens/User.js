import React from "react";
import { ScrollView, StyleSheet, TextInput, View, Text, ImageBackground, Dimensions } from "react-native";
import styleBase from "../Assets/styleBase"
import Header from "../Components/Header";
import Icon from 'react-native-vector-icons/FontAwesome'
import MiniCollection from "../Components/MiniCollection";

export default props => {
    const styles = StyleSheet.create({
        imagePerfil: {
            width: Dimensions.get('window').width / 100 * 40,
            aspectRatio: 1,
            backgroundColor: '#eee',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: Dimensions.get('window').width / 100 * 40,
            overflow: 'hidden',
        },
        imagePerfilBox: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        },
        coverImage: {
            flex: 1,
            resizeMode: 'cover', 
            borderRadius: 5,
            justifyContent: "center"
        },
    })

    const user = {
        image: { uri: 'https://e-cdns-images.dzcdn.net/images/user/d449598eb4fe4157539f49f4fbb66bf8/264x264-000000-80-0-0.jpg'},
        email: 'felipealves@email.com'
    }
    const playlists = {
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
        <View style={[ {
            justifyContent: 'center',
            backgroundColor: "white",
            overflow: 'scroll',
          }, styleBase.container ]}
        >
            <ScrollView>

            <Header title="Felipe Alves" { ...props } />

            <View style={ styles.imagePerfilBox }>

                <View style={ [styles.imagePerfil, ] }>
                    <ImageBackground 
                        source={ user.image } 
                        style={ styles.coverImage }
                    >
                    </ImageBackground>
                </View>
            </View>
            <View style={{ marginVertical: 10}}>
                <Text style={ {textAlign: 'center'} }>{ user.email }</Text>
            </View>

            <View style={ [styleBase.hr, { width: '30%', marginHorizontal: '35%', marginVertical: 20 }] } />

            <MiniCollection collection={ playlists } title="Playlists" { ...props } />
           
            </ScrollView>
        </View>

    )
}