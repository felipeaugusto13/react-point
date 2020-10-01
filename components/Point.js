import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Point(){
    const [date, setDate] = useState(null);
    const [firstPoint ,setFirstPoint] = useState(null);
    const [textFirst, setTextFirst] = useState(null);
    const [secondPoint, setSecondPoint] = useState(null);
    const [thirdPoint, setThirdPoint] = useState(null);
    const [fourthPoint, setFourthPoint] = useState(null);
    const [textHour, setTextHour] = useState(null);

    useEffect(() => {
        var day = null;
        var month = null;
        var year = new Date().getFullYear().toString();
        var hour = null;
        var minute = null;
        var seconds = null;

        const timer = setInterval(()=>{
            setTextHour(new Date().toLocaleTimeString())
        },100)
        
        
        setDate(new Date().toDateString())

        return function cleanup(){
            clearInterval(timer);
        }
    })

    function setPoint(){
        if(firstPoint === null){
            setFirstPoint(new Date().getTime())
        }
        else if(secondPoint === null){
            setSecondPoint(new Date().getTime())
        }
        else if(thirdPoint === null){
            setThirdPoint(new Date().getTime())
        }
        else if(fourthPoint === null){
            setFourthPoint(new Date().getTime())
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={styles.fontDate}>{date}</Text>
            </View>
            <View style={styles.containerPoint}>
                <View style={styles.containerLabel}>
                    <View style={styles.labels}>
                        <Text>Entrada:</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Saida do almoço:</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Volta do almoço:</Text>
                    </View>
                    <View style={styles.labels}>
                        <Text>Saida:</Text>
                    </View>
                </View>
                <View style={styles.containerHours}>
                    <View style={styles.labels}>
                        {firstPoint !== null ?
                        <Text>{new Date(firstPoint).toLocaleTimeString()}</Text> : <Text>Vazio</Text> }
                    </View>
                    <View style={styles.labels}>
                        {secondPoint !== null ? 
                        <Text>{new Date(secondPoint).toLocaleTimeString()}</Text> : <Text>Vazio</Text> }
                    </View>
                    <View style={styles.labels}>
                        {thirdPoint !== null ?
                        <Text>{new Date(thirdPoint).toLocaleTimeString()}</Text> : <Text>Vazio</Text> }
                    </View>
                    <View style={styles.labels}>
                        {fourthPoint !== null ?
                        <Text>{new Date(fourthPoint).toLocaleTimeString()}</Text> : <Text>Vazio</Text> }
                    </View>
                </View>
            </View>
            <View style={styles.hourContainer}>
                <Text style={styles.hourFont}>{textHour}</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.pointButton}
                onPress={()=>{ setPoint()}}>
                    <Text style={styles.fontButton}>Bater ponto</Text>
                </TouchableOpacity>
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
        backgroundColor:"#00bcd4"
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
    },
    dateContainer:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:20
    },
    fontDate: {
        fontSize:40,
        fontWeight:"bold"
    },
    containerButton:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
        height:200
    },
    pointButton:{
        backgroundColor:"#008394",
        height:50,
        width:"70%",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    fontButton:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:17
    },
    hourContainer: {
        width:"100%",
        height:200,
        justifyContent:"center",
        alignItems:"center"
    },
    hourFont:{
        fontSize:60,
        fontWeight:"bold"
    }
})