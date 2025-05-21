import { use, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Cards from "../components/card";
import { db } from "../controller";
import { collection, getDocs } from "firebase/firestore";
import { useCart } from "../components/cartprovider";

export default function Cart({navigation}){
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const array = [];
                querySnapshot.forEach((doc) => {
                    array.push({id: doc.id, ...doc.data() });
                });
                setProdutos(array);
            } catch (error){
                console.log("Erro ao buscar produtos: ", error)
            }
        }
        carregarProdutos();
    }, []);
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Carrinho</Text>

            <FlatList data={produtos} renderItem={({item}) => (    
                <Cards nome={item.nome} preco={item.valor} img={item.imagem} comprar={() => {addToCart(item); navigation.navigate('carrinho')}}/>
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
