import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function Point(){
    const [date, setDate] = useState(null);
    const [firstPoint ,setFirstPoint] = useState(null);
    const [secondPoint, setSecondPoint] = useState(null);
    const [thirdPoint, setThirdPoint] = useState(null);
    const [fourthPoint, setFourthPoint] = useState(null);
    const [textHour, setTextHour] = useState(null);
    const [jorney , setJorney] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null);
    const [isOdd, setIsOdd] = useState(false);
    const [color, setColor] = useState("#f00");
    const [symbol, setSymbol] = useState("-");
    const [isEnd, setIsEnd] = useState(false)

    useEffect(() => {

        const timer = setInterval(()=>{
            setTextHour(new Date().toLocaleTimeString())
        },1000)

        const timerDecrease = setInterval(() => {
            if(isOdd === true && remainingTime !== null){
                if(remainingTime <= (new Date().getTimezoneOffset()*60*1000 + 1000)){
                    console.log("entrei")
                    console.log(remainingTime)
                    setIsEnd(true)
                }
                if(isEnd === false){
                    setRemainingTime(remainingTime - 1000)
                    setRemaingTimeColor()
                    setRemaingSymbol()
                }
                else if(isEnd === true){
                    setRemainingTime(remainingTime + 1000)
                    setRemaingTimeColor()
                    setRemaingSymbol()
                }
            }
        },1000)
        
        
        setDate(new Date().toDateString())

        return function cleanup(){
            clearInterval(timer);
            clearInterval(timerDecrease)
        }
    })

    function setRemaingTimeColor(){
        if(isEnd === false){
            setColor("#f00")
        }
        else{
            setColor("#0f0")
        }
    }

    function setRemaingSymbol(){
        if(isEnd === false){
            setSymbol("-")
        }
        else{
            setSymbol("+")
        }
    }

    function setPoint(){
        if(firstPoint === null){
            setFirstPoint(new Date().getTime())
            setJorney(new Date().getTime() + 8*60*60*1000 + 13*60*1000)
            console.log(new Date().getTimezoneOffset())
            // setRemainingTime(new Date().setTime((0 + (new Date().getTimezoneOffset() / 60))*60*60*1000 + 1*60*1000))
            setRemainingTime(new Date().setTime(new Date().getTimezoneOffset()*60*1000 + 0*60*60*1000 + 1*60*1000))
            
            setIsOdd(true)
        }
        else if(secondPoint === null){
            setSecondPoint(new Date().getTime())
            setIsOdd(false)
        }
        else if(thirdPoint === null){
            setThirdPoint(new Date().getTime())
            setIsOdd(true)
        }
        else if(fourthPoint === null){
            setFourthPoint(new Date().getTime())
            setIsOdd(false)
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
                        <Text>{new Date(firstPoint).toLocaleTimeString()}</Text> : <Text>-</Text> }
                    </View>
                    <View style={styles.labels}>
                        {secondPoint !== null ? 
                        <Text>{new Date(secondPoint).toLocaleTimeString()}</Text> : <Text>-</Text> }
                    </View>
                    <View style={styles.labels}>
                        {thirdPoint !== null ?
                        <Text>{new Date(thirdPoint).toLocaleTimeString()}</Text> : <Text>-</Text> }
                    </View>
                    <View style={styles.labels}>
                        {fourthPoint !== null ?
                        <Text>{new Date(fourthPoint).toLocaleTimeString()}</Text> : <Text>-</Text> }
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
            <View style={styles.containerFinish}>
                {jorney !== null ?
                <View>
                    <View style={styles.containerRemainer}>
                            <Text style={styles.fontRemainer}>Fim da jornada: {new Date(jorney).toLocaleTimeString()}</Text>
                    </View>
                    <View style={styles.containerRemainer2}>
                            <Text style={styles.fontRemainer}>Falta: </Text>
                            <Text style={{color:color, marginHorizontal:3, fontWeight:"bold", fontSize:15}}> {symbol} {new Date(remainingTime).toLocaleTimeString()}</Text>
                    </View>
                </View>
                :
                <View style={styles.containerFinish}/>
                }
                <TouchableOpacity style={styles.pointFinish}
                onPress={() => {
                    if(isOdd){
                        Alert.alert("Não pode haver batidas impar")
                    }
                }}>
                    <Text style={styles.fontFinish}>Finalizar Dia</Text>
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
        height:100
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
        height:150,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    hourFont:{
        fontSize:60,
        fontWeight:"bold"
    },
    containerFinish: {
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"center",
        height:200
    },
    pointFinish: {
        backgroundColor:"#b71c1c",
        borderRadius:7,
        width:"50%",
        height:50,
        alignItems:"center",
        justifyContent:"center"
    },
    fontFinish: {
        fontSize:15,
        fontWeight:"bold",
        color:"#fff"
    },
    containerRemainer:{
        marginVertical:5,
        alignItems:"center",
        justifyContent:"center"
    },
    containerRemainer2:{
        flexDirection:'row',
        marginVertical:20,
        alignItems:"center",
        justifyContent:"center"
    },
    fontRemainer: {
        fontSize:15,
        fontWeight:"bold",
    }
})