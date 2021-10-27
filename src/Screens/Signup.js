import React from "react"
import { Button, Text, View, TextInput, StyleSheet } from "react-native"

export default props => {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

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

            <Text style={ styles.titlePage }>Cadastre-se</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={ styles.input }
                onChangeText={setName}
                value={name}
            />

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
                    title="Cadastrar"
                    onPress={ p => {
                        props.navigation.navigate ("Initial") 
                    } }
                ></Button>
            </View>

            <View style={ styles.center }>
                <Text 
                    title="Faça Login"
                    style={ styles.linkLogin }
                    onPress={
                        p => {
                            props.navigation.navigate('Login')
                        }
                    }
                >
                    Login
                </Text>
            </View>

        </View>
    )
}