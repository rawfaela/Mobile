import {Text, View, Image, StyleSheet} from 'react-native'

export function Imagens(){
    return(
        <View style={styles.imagens}>
            <Image source={{uri : 'https://www.petz.com.br/blog/wp-content/uploads/2022/09/gatos-dominantes3.jpg'}} style={styles.imagem}/>
            <Image source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5ni-znD3hIYNvSjteVuTE-L0mw3uLLcW2g&s'}} style={styles.imagem}/>
        </View>
    )
}

export function Imagens2(){
    return(
        <View style={styles.imagens}>
            <Image source={{uri : 'https://i.gifer.com/NYGV.gif'}} style={styles.imagem}/>
            <Image source={{uri : 'https://media.tenor.com/y8zjaIK8rpoAAAAM/cat-on-skateboard-cat.gif'}} style={styles.imagem}/>
        </View>
    )
}

export default function Teste(){ 
    return(
        <View style={styles.container}>
            <View style={{flex:1}}><Text style={styles.texto1}> Gatos Incríveis! </Text></View>
            <Imagens/>
            <View style={{flex:1}}><Text style={styles.texto2}> Você sabia que os gatos são naturalmente curiosos e gostam de explorar, entrar em malas e sacolas, e cheirar objetos e pessoas? </Text></View>
            <Imagens2/>

            <View style={{flex:1}}><Text style={styles.cred}> Créditos: Rafaela e Google </Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(175, 130, 238)',
    },
    texto1: {
        marginTop: 60,
        fontSize: 35,
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'rgb(46, 6, 83)',
        textShadowColor: 'rgba(136, 65, 202, 0.75)',
        textShadowOffset: {width: 2, height: 3}, //* width pro lado (pos direita, neg esquerda), height cima(neg)/baixo(pos)
    },
    texto2: {
        fontSize: 18,
        textAlign: 'right',
        marginTop: 30,
        marginRight: 3,
        color:'rgb(255, 255, 255)',
    },
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
    imagens: {
        flex: 1.5,
        flexDirection:'row', 
        alignSelf:'center', 
        gap: 2,
    },
    cred:{
        fontSize:20,
        textAlign: 'center',
        marginTop: 100,
        //* text align vertical so funciona em android
    }
  });
