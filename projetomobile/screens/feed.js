import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { TextInput } from 'react-native-web';

export default function Feed(){ 
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.titulo}>Feed</Text>
            <Image source={{uri:'https://uploadedfiles.yviews.com.br/imageupload/2db0802a-ce3c-442c-88a7-659616bdb365/00511f39-8bd0-45fd-9c3d-f3d5630f01ec.jpg'}} style={{width:400, height:400, alignSelf: 'center'}}></Image>
            <Text style={styles.texto}>Conheça o mascote da loja! A perfeição em forma de gato. Não é arrogância, é genética.😼✨ #ReiDoLar #GatoDivônico</Text>

            <Image source={{uri:'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/102600/4d44a669-4f6b-46cc-a290-54f9a01c77e6-102600-la-joinquille.jpg'}} style={{width:400, height:400, alignSelf: 'center'}}></Image>
            <Text style={styles.texto}>Novo lançamento!🌟Sinta a magia de uma nova fragrância que envolve e encanta! #Lançamento #PerfumeNovo #FragrânciaExclusiva</Text>

            <View style={{alignItems: 'center', marginBottom: 20,}}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.saibamais}>Saiba mais</Text>
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
        fontSize: 22,
        marginHorizontal: 5,
        textAlign: 'justify',
        marginBottom: 40,
    },
    saibamais: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    botao: {
        marginTop: 20,
        width: 130, 
        height: 30, 
        backgroundColor: 'rgba(136, 65, 202, 0.49)', 
        borderRadius: 5
    }
});
