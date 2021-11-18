import React from "react"
import { Button, Text, View, TextInput, StyleSheet, Alert } from "react-native"
import { useUser } from "../Context/UserContext";
import Service from "../Services/Service";

export default props => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {user, setUser} = useUser()

    const login = () => {
        // if (email != '' && password != '') {

            Service.requisicaoPOST('POST', '/auth/login', {
                email,
                password
            }).then(response => {
                console.log(response)
            })

            // if (email == 'felipe@email.com' && password == '123456') {

                setUser({
                    name: 'Felipe A.',
                    email: email,
                    password: password,
                    logged: true,
                    image: { uri: 'https://e-cdns-images.dzcdn.net/images/user/d449598eb4fe4157539f49f4fbb66bf8/264x264-000000-80-0-0.jpg'},
                    id: 15
                })

                setEmail('')
            setPassword('')

                props.navigation.navigate('Initial')
            // } else {
            //     Alert.alert('Email ou senha inválidos')
            // }
        // }  else {
        //     Alert.alert('Informar email e senha')
        // }
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: "column",
            padding: 20,
        },
        input: {
            backgroundColor: 'white',
            marginBottom: 8,
        },
        label: {
            fontSize: 16,
            color: 'black',
        },
        title: {
            fontSize: 30,
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 15,
        },
        titlePage: {
            fontSize: 23,
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 15,
        },
        buttonCadastrar: {
            marginTop: 15,
            marginBottom: 15,
        },
        linkLogin: {
            color: 'dodgerblue',
            textAlign: 'center',
            color: 'dodgerblue', 
            fontWeight: '700',
            fontSize: 17,
            
        },
        center: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    });
      

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Dowee</Text>

            <Text style={ styles.titlePage }>Login</Text>

            <Text style={ styles.label }>Email</Text>
            <TextInput
                style={ styles.input }
                onChangeText={setEmail}
                value={email}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                secureTextEntry={ true }
                style={ styles.input }
                onChangeText={setPassword}
                value={password}
            />

            <View style={ styles.buttonCadastrar }>
                <Button 
                    title="Entrar"
                    onPress={ login }
                ></Button>
            </View>

            <View style={ styles.center }>
                <Text 
                    title="Cadastrar"
                    style={ styles.linkLogin }
                    onPress={
                        p => p.navigate.navigate('Sigin')
                    }
                >
                    Cadastrar-se
                </Text>
            </View>

        </View>
    )
}