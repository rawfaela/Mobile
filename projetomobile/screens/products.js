import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Cards from "../components/card";

export default function Products(){
    const [produtos, setProdutos] = useState([
        {id:1, nome: 'Egeo Pina Blast', preco: 99.99, img: 'https://supercolecao.com/sites/default/files/styles/large/public/images/collections/package/embalagem-egeo-pina-blast-25007.jpg?itok=TeO4G4N5'},
        {id:2, nome: "Dior J'Adore", preco: 1039.99, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS52_ktZmMEgRkqN9w9aRcamjjJcJSFm_toUeYkuuG4u0NjJqdUFe3fE_vg8Uw4KwrZA9hdIeUc38G--hABtZag38PqF_zJU6BHDqArQsl5qE173VZKX4UN'},
        {id:3, nome: 'Chanel Coco', preco: 499.99, img: 'https://www.bearshop.com.br/wp-content/uploads/2017/10/bearshop-chanel-coco-mademoiselle-EDP-feminino.jpg'},
        {id:4, nome: 'Jean Paul Gaultier Le Male', preco: 1049.99, img: 'https://fragrance.vteximg.com.br/arquivos/ids/158429-1000-1000/jpg-le-male-le-parfum-125ml-1.png?v=638072329478900000'}
    ])

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Produtos</Text>
            {/* array com map
            {produtos.map((item) => (
                <Text style={styles.prods}>{item.nome} - R${item.preco}</Text>))} */}

            {/* array com flatlist */}
            <FlatList data={produtos} renderItem={({item}) => (    
                <Cards nome={item.nome} preco={item.preco} img={item.img}/>
            )} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>
         </View>
             
          
    )
}

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
})
