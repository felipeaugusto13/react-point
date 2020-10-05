import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import firebase from '../src/firebaseConnection'; 



export default function Login({navigation}){
    const [nome, setNome] = useState('carregando...');

    useEffect(() => {
        async function dados(){
            await firebase.database().ref('nome').once('value', (snapshot) => {
                setNome(snapshot.val());
            })
        }
        dados();
    }, [])

    return(
        <View style={styles.container}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>{nome}</Text>
            <TouchableOpacity style={styles.containerButton} onPress={()=>{
                navigation.navigate("Home")
            }}>
                <Text style={styles.buttonFont}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center"
    },
    containerButton:{
        height:20,
        width:"50%",
        backgroundColor:"#0f0",
        justifyContent:"center",
        alignItems:"center"
    },
    buttonFont:{
        fontSize:15,
        fontWeight:'bold',
        color:"#fff"
    }

})


