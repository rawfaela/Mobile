import {Text, View, Image, StyleSheet} from 'react-native'
import { Button, TextInput } from 'react-native-web';

export default function Login(){ 
    return(
        <View style={styles.container}>
            <View style={{flex:1}}><Text style={styles.titulo}> Perfumes by Rafa </Text></View>

            <View style={{flex:1}}>
                <TextInput style={styles.input} placeholder="Usuário"></TextInput>
                <TextInput style={styles.input} placeholder="Senha"></TextInput>
            </View>

            <View style={{flex:0.5}}>
                <Button title="Entrar" color='rgb(138, 83, 214)' style={{width: 30, height: 60}}
                ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(175, 137, 228)',
    },
    input: {
        fontSize: 23,
        height: 50,
        margin: 12,
        color: 'white',
        borderColor: 'rgb(117, 64, 192)',
        borderWidth: 4,
        padding: 10,
        borderRadius: 7,
        backgroundColor:' rgb(168, 128, 223)',
    },
    titulo: {
        marginTop: 150,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(46, 6, 83)',
        textShadowColor: 'rgba(136, 65, 202, 0.75)',
        textShadowOffset: {width: 2, height: 3},
    },
  });
