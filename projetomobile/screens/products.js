import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export default function Products(){
    const [produtos, setProdutos] = useState([
        {id:1, nome: 'Egeo Pina Blast', preco: 99.99, img: 'https://supercolecao.com/sites/default/files/styles/large/public/images/collections/package/embalagem-egeo-pina-blast-25007.jpg?itok=TeO4G4N5'},
        {id:2, nome: "Dior J'Adore", preco: 1039.99, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS52_ktZmMEgRkqN9w9aRcamjjJcJSFm_toUeYkuuG4u0NjJqdUFe3fE_vg8Uw4KwrZA9hdIeUc38G--hABtZag38PqF_zJU6BHDqArQsl5qE173VZKX4UN'},
        {id:3, nome: 'Chanel Coco', preco: 499.99, img: 'https://www.bearshop.com.br/wp-content/uploads/2017/10/bearshop-chanel-coco-mademoiselle-EDP-feminino.jpg'}
    ])

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Produtos</Text>
            {/* array com map
            {produtos.map((item) => (
                <Text style={styles.prods}>{item.nome} - R${item.preco}</Text>))} */}

            {/* array com flatlist */}
            <FlatList data={produtos} renderItem={({item}) => (    
                <View style={styles.prod}>       
                    <Text style={styles.txtprod}>{item.nome} </Text>
                    <Text style={styles.txtprod}>R${item.preco}</Text>
                    <Image source={{uri: item.img }}style={styles.imgprods}/>
                </View>
            )} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>
         </View>
             
          
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(214, 173, 233)',
        justifyContent: 'space-around',
       
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

    prod:{
        alignItems: 'center',
        backgroundColor: 'rgb(208, 157, 231)',
        width: '55%',
        padding: 20,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 20,
    },
    txtprod:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
    },
    imgprods: {
        width: 150,
        height: 150,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'rgb(46, 6, 83)',
    },
})