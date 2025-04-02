import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-web';

export default function Login({navigation}){ 
    return(
        <View style={styles.container}>
            <View style={{flex:1}}><Text style={styles.titulo}> Perfumes by Rafa </Text></View>

            <View style={{flex:1}}>
                <TextInput style={styles.input} placeholder="Usuário"></TextInput>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}></TextInput>
            </View>

            <View style={{flex:0.5, alignItems: 'center'}}>
                <TouchableOpacity
                    style={styles.botao} onPress={() => navigation.navigate('HomeTabs')}>
                        <Text style={{ color: 'white', fontSize: 26 }}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

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
    botao: {
        width: 200, 
        height: 60, 
        backgroundColor: 'rgb(138, 83, 214)', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10
    }
  });
