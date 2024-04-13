// App.js
import React from 'react';
import { View, StyleSheet, Image, Text,ImageBackground } from 'react-native';


export default function Statist({route}){
 legg  = route.params;
if (legg === 'Нет.') {
    legg = 'Товар запрещается к употреблению';
   } else if (legg === 'Да.') {
    legg = 'Товар разрешается к употреблению';
   } else {
    legg = 'Извините, я не смог распознать текст :(';
   }
 return (
    <View style={styles.container}>
        <ImageBackground source={require('./img/Group 17.png')} style={styles.image}> 
            <View style={styles.content}>
                <Text style={styles.title_text1}>Молоко питьевое пастеризованное</Text>
                <Text style={styles.title_text2}>{legg}</Text>
                <Text style={styles.title_text3}>Продукт содержит лактозу</Text>
            </View>
        </ImageBackground>
    </View>
    
 );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor: '#FFE7D7',
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 20,
        borderRadius: 40,
        width:350,
        height:350,
        backgroundColor: "#fff",
        
    },
    image: { 
        height:'100%', 
        width:'100%', 
        flex: 1, 
        resizeMode: 'contain', 
        justifyContent: 'center', 
     }, 
    title_text1:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    title_text2:{
        textAlign: 'center',
        paddingTop:40,
        paddingLeft:10,
        paddingRight:10,
        width: 250,
        height: 185,
        backgroundColor: '#F8664F',
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        borderRadius:50,
    },
    title_text3:{
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft:10,
        paddingRight:10,
    },
});




