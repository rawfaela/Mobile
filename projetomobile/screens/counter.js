import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function Counter(){ 
    const [cont, setCont] = useState(0) //* estado inicial

    function Mais(){
        setCont(cont+1)
    }
    function Menos(){
        if (cont>0){
            setCont(cont-1)   
        }
    }
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.titulo}>Contador: {cont}</Text>

            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto} onPress={Mais}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Menos}>
                    <Text style={styles.texto}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} placeholder="Email"/>
            </View>

        </ScrollView>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(214, 173, 233)',
    },
    titulo: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(46, 6, 83)',
        textShadowColor: 'rgba(136, 65, 202, 0.49)',
        textShadowOffset: {width: 2, height: 2},
    },
    texto: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },
    botao: {
        marginTop: 20,
        width: 130, 
        height: 30, 
        backgroundColor: 'rgb(95, 30, 156)', 
        borderRadius: 5,
        justifyContent: 'center',
        margin: 'auto',
    },
    input: {
        fontSize: 23,
        width: '60%',
        height: 50,
        margin: 8,
        color: 'white',
        borderColor: 'rgb(117, 64, 192)',
        borderWidth: 4,
        padding: 10,
        borderRadius: 7,
        backgroundColor:' rgb(182, 143, 236)',
    }
});
