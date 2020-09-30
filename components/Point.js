import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Point(){
    return(
        <View style={styles.container}>
            <View>
                DIA
            </View>
            <View>
                Pontos
            </View>
            <View>
                Hora
            </View>
            <View>
                Bater ponto
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})