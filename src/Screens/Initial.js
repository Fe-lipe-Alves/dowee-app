import React from "react"
import { View, Text, Button } from "react-native"

export default props => {
    return (

        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: "white",
          }}>
           
           <View>

                <Text style={{ fontSize: 40, textAlign: 'center' }}>Dowee</Text>
                <Button title="Entrar" onPress={p=>{
                    props.navigation.navigate("Signup") 
                }}>
                    12313213
                </Button>

           </View>

        </View>

    )
}