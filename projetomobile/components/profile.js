import {Text, View, Image, StyleSheet} from 'react-native'

export function Gallery(){
    return( //? PRECISA DO RETURN SEMPRE (se nao n aparece nada ne)
        <View>
        <Image source={{uri : 'https://www.petz.com.br/blog/wp-content/uploads/2022/09/gatos-dominantes3.jpg'}} style={styles.imagem}/> {/* pra coloca imagem tem q importa biblioteca */}

        <Image source={{uri : 'https://media1.tenor.com/m/qIRIMISe6oMAAAAd/gato-dedo-do-meio.gif'}} style={styles.imagem}/>
        </View>
    )
}

export function IGottaFeeling(){
    return(
    <View>
        <Text style={styles.feeling}>
            i gotta feeling oooh that tonight's gonna be a good night that tonight's gonna be a good night that tonight's gonna be a good good night{'\n'}
            tonight's the night let's live it up i got my money let's spend it up go out and smash it like oh my god jump out the sofa let's kick it OFF
        </Text>
    </View>
    )
}

export default function Profile(){ //? componente tem q te letra maiuscula
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> meu app bafônico </Text>
            <Gallery/>
            <IGottaFeeling/>
        </View>
    )
}
//* align horizontal 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#792de3',
      flexDirection: 'column', //* um embaixo do outro (se quiser bota do lado mesma coisa) (so funciona em view)
      justifyContent: 'space-between',
    },
    titulo: {
      fontSize: 40,
      color: '#f5cd02',
      marginTop: 40,
    },
    imagem: {
        width: 300,
        height: 300,
        marginInline: 20,
        borderWidth: 3,
        borderColor: '#f5cd02',
        borderRadius: 10,
        marginTop: 15,
    },
    feeling: {
        margin: 10,
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        marginBottom: 20,
    }
  });