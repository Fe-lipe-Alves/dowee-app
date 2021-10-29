import React from "react";
import { ScrollView, StyleSheet, TextInput, View, Text, Switch, Button } from "react-native";
import styleBase from "../Assets/styleBase"
import Header from "../Components/Header";

export default props => {
    const styles = StyleSheet.create({
        input: {
            borderWidth: 1,
            padding: 10,
            marginTop: 8,
            borderRadius: 5
        },
        checkboxContainer: {
            flexDirection: "row",
            marginBottom: 20,
        },
        checkbox: {
            alignSelf: "center",
        },
        label: {
            margin: 8,
        },
        check: {
            fontSize: 20,
            color: 'black',
            fontWeight: '100'
        }
    })

    const [name, setName] = React.useState()
    const [shared, setShared] = React.useState(false);
    const toggleSwitch = () => setShared(previousState => !previousState);

    return (
        <View style={[{
            justifyContent: 'center',
            backgroundColor: "white",
            overflow: 'scroll',
          }, styleBase.container ]}
        >
            <ScrollView>

            <Header title="Nova Playlist" { ...props } />

            <View style={ [styleBase.container, {marginTop: 10}] }>
                <Text>Nome da nova playlist</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ setName }
                    value={ name }
                />
            </View>

            <View style={ [styleBase.container, {marginTop: 10}] }>
                <Text>Descreva sobre o conteúdo dela</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ setName }
                    value={ name }
                    multiline = {true}
                    numberOfLines = {4}
                />
            </View>

            {/* <View style={ [styleBase.container, {marginTop: 10}] }>
                <View style={ [styleBase.row, { alignItems: 'flex-start' }  ] }>
                    <Switch
                        trackColor={{ false: "#767577", true: "#767577" }}
                        thumbColor={ shared ? "#385c78" : "#f4f3f4" }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={ toggleSwitch }
                        value={ shared }
                    />
                    <Text>Compartilhada</Text>
                </View>
            </View> */}

            <View style={ styleBase.container }>
                <Button 
                    title="Salvar"
                    color="#333"
                    onPress={ p => {
                        props.navigation.navigate ("Initial") 
                    } }
                ></Button>
            </View>

           
            </ScrollView>
        </View>

    )
}