import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { useCart } from "../components/cartprovider";

export default function Cart() {
  const { cart, addToCart, decreaseQuantity, clearCart } = useCart();

  const aumentar = (id) => {
    const produto = cart.find(item => item.id === id);
    if (produto) {
      addToCart(produto, 1); // soma 1 na quantidade
    }
  };

  const diminuir = (id) => {
    const produto = cart.find(item => item.id === id);
    if (produto) {
      decreaseQuantity(id); // diminui 1 e remove se chegar a zero
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>

      {cart.length === 0 ? (
        <Text style={styles.txtprod}>Seu carrinho está vazio.</Text>
      ) : (
        <View>
            <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.prod}>
                <Image source={{ uri: item.imagem }} style={styles.imgprods} />
                <View style={{ flex: 1.5, margin: 5, alignItems: "center" }}>
                    <Text style={styles.txtprod}>{item.nome}</Text>
                    <Text style={styles.txtprod}>R$ {item.valor}</Text>
                </View>
                <View
                    style={{
                    flex: 1,
                    margin: 5,
                    alignItems: "center",
                    flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => aumentar(item.id)}
                    >
                    <Text style={styles.txtbotao}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtbotao}>{item.quantidade}</Text>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => diminuir(item.id)}
                    >
                    <Text style={styles.txtbotao}>-</Text>
                    </TouchableOpacity>
                </View>
                </View>
            )}/>
        <TouchableOpacity style={styles.limpar} onPress={() => clearCart()}>
            <Text style={styles.txtprod}>Limpar carrinho</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
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
    prod:{
        alignItems: 'center',
        backgroundColor: 'rgb(208, 157, 231)',
        width: '90%',
        padding: 10,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtprod:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
    },
    imgprods: {
        width: 100,
        height: 100,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'rgb(46, 6, 83)',
    },
    botao: {
        width: 30, 
        height: 30, 
        backgroundColor: 'rgb(95, 30, 156)', 
        borderRadius: 5,
        justifyContent: 'center',
        margin: 'auto',
    },
    txtbotao: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    limpar: {
        padding: 5,
        backgroundColor: 'rgb(170, 109, 228)', 
        borderRadius: 5,
        justifyContent: 'center',
        margin: 'auto',
    }
})
