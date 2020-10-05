import React, {useState, useEffect} from 'react';
import {View,Text} from 'react-native';

export default function History(){
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontWeight:"bold",fontSize:15}}>History</Text>
        </View>
    )
}