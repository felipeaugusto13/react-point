import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Point(){
    return(
        <View style={styles.container}>
            <View>
                <Text>Dia</Text>
            </View>
            <View style={styles.containerPoint}>
                <View style={styles.containerLabel}>
                    <View style={styles.labels}>
                        <Text>Entrada</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Saida do almoço</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Volta do almoço</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Saida</Text>
                    </View>
                </View>
                <View style={styles.containerHours}>
                    <View style={styles.labels}>
                        <Text>Entrada</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Saida do almoço</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Volta do almoço</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Saida</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>Hora</Text>
            </View>
            <View>
                <Text>Bater ponto</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        
    },
    containerPoint:{
        flexDirection:"row"
    },
    containerLabel: {
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"flex-start",
        width:"50%",
        backgroundColor:"#3c3c3c"
    },
    containerHours:{
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        width:"50%",
        backgroundColor:"#9c9c9c"
    },
    labels: {
        margin:10
    }
})