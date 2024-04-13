// App.js
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


export default function Statist({navigation}){
 return (
    <View style={styles.container}>
        <Text style={styles.title_text}>Статистика</Text>
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
    title_text: {
        padding:20,
        backgroundColor: '#fff',
        borderRadius: 34,
        fontSize: 32,
        fontWeight: 'bold',
    },
});




