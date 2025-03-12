import {Text, View, Image, StyleSheet} from 'react-native'
import { ImageBackground } from 'react-native-web';
import Fundo from '../assets/fundo.jpg'

export default function Home(){ 
    return(
        <View style={styles.container}>
            <ImageBackground source={Fundo} style={{flex: 1, width: '100%', height: '100%'}}>
                <View style={{flex:1}}><Text style={styles.titulo}> Perfumes by Rafa </Text></View>

                <View style={styles.imagens}>
                    <Image source={{uri : 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/blog/wordpress/prod/sites/1/2023/02/28161717/blz_conteudo_loucas_2023_fev_interna_floratta-red-blossom.jpg'}} style={styles.imagem}/>
                    <Image source={{uri : 'https://http2.mlstatic.com/D_Q_NP_892409-MLU75559572244_042024-O.webp'}} style={styles.imagem}/>
                </View>

                <View style={{flex:1}}><Text style={styles.texto2}> Encontre os melhores aromas do mundo <br/> neste catálogo! </Text></View>
                
                <View style={styles.imagens}>
                    <Image source={{uri : 'https://a-static.mlcdn.com.br/1500x1500/perfume-masculino-eudora-h-deo-colonia-flow-100ml/cfrcosmeticoseireli/53452/d9a7483293030a793695676f3363f458.jpeg'}} style={styles.imagem}/>
                    <Image source={{uri : 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwfb8dde15/produto-joia/background/mobile/103348.jpg'}} style={styles.imagem}/>
                </View>

                <View style={{flex:1}}><Text style={styles.cred}> Todos os perfumes foram feitos pensando em você! </Text></View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    titulo: {
        marginTop: 60,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(46, 6, 83)',
        textShadowColor: 'rgba(136, 65, 202, 0.49)',
        textShadowOffset: {width: 2, height: 2},
    },
    texto2: {
        fontSize: 25,
        textAlign: 'right',
        marginLeft: 36,
        marginTop: 9,
        marginRight: 3,
        color: 'rgb(46, 6, 83)',
        fontWeight: 'bold',
    },
    imagem: {
        width: 185,
        height: 185,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'rgb(46, 6, 83)',
    },
    imagens: {
        flex: 1.5,
        flexDirection:'row', 
        alignSelf:'center', 
        gap: 3,
    },
    cred:{
        fontSize: 22,
        textAlign: 'center',
        marginTop: 50,
        fontWeight: 'bold',
        color: 'rgb(46, 6, 83)',
        backgroundColor: 'rgba(161, 118, 201, 0.49)',
    }
  });
