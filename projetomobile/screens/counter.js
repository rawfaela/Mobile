import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { useState } from 'react';

export default function Counter(){ 
    const [cont, setCont] = useState(0) //* estado inicial

    function Mais(){
        setCont(cont+1)
    }
    function Menos(){
        setCont(cont-1)
    }
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.titulo}>Contador: {cont}</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto} onPress={Mais}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Menos}>
                    <Text style={styles.texto}>-</Text>
                </TouchableOpacity>
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
});
