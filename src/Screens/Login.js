import React from "react"
import { Button, Text, View, TextInput, StyleSheet } from "react-native"

export default props => {
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
                            props.navigation.navigate('Signup')
                        }
                    }
                >
                    Cadastrar-se
                </Text>
            </View>

        </View>
    )
}