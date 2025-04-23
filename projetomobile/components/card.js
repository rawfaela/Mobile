import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export default function Cards({nome, preco, img}){
    return(
        <View style={styles.prod}>       
            <Text style={styles.txtprod}>{nome} </Text>
            <Text style={styles.txtprod}>R${preco}</Text>
            <Image source={{uri: img }}style={styles.imgprods}/>
        </View>
    )
}

const styles = StyleSheet.create({
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