import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from "../../assets/logo.png";

export default function Top() {
    return <View style={styles.top}>
        <Image source={logo} style={styles.image}/>
    <Text style={styles.welcome}>Oi Brilhante!</Text>
    <Text style={styles.caption}>Encontre os melhores produtores!!!</Text>
    </View>
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 30,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    caption:{
        fontSize: 16,
        lineHeight: 26,
    },
})