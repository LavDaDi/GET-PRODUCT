import React, { useState } from 'react'; 
import { ImageBackground, StyleSheet, Text, TextInput, View, Button, PermissionsAndroid, Dimensions} from 'react-native'; 
import axios from 'axios'; 
import Parse from 'parse/react-native'; 



export default function MainSrack({navigation}) {
const loadScene = () => {
    navigation.navigate('MainStack');
}
 const [name, setUsername] = useState(''); 
 const [password, setPassword] = useState(''); 
  
 const handleSignUp = async () => { 
     try { 
       const userData = { 
        data: 
           {
             name, 
           password, 
           contraindications: 'Лактоза' 
           } 
         };  

       const response = await axios.post('http://77.91.87.98:5000/registration', userData); 

       console.log(response.data); 
       navigation.navigate('MainStack');

     } catch (error) { 
       console.error('Error signing up user: ', error); 
     } 
 }; 
  
 return ( 
    <View style={styles.container}> 
    <ImageBackground source={require('./img/bg.jpg')} style={styles.image}> 
      <Text style={styles.text}>Вход</Text> 
      <TextInput 
        style={styles.input} 
        value={name} 
        placeholder="name" 
        onChangeText={(text) => setUsername(text)} 
        autoCapitalize="none" 
      /> 
      <TextInput 
        style={styles.input} 
        value={password} 
        placeholder="password" 
        secureTextEntry 
        onChangeText={(text) => setPassword(text)} 
      /> 
      <Button title="Sign Up" onPress={loadScene} /> 
    </ImageBackground> 
 </View> 
 ); 
}; 
 
const styles = StyleSheet.create({ 
 container: { 
    flex: 1, 
    flexDirection: 'column', 
    minHeight: Math.round(Dimensions.get('window').height), 
 }, 
 image: { 
    height:'100%', 
    width:'100%', 
    flex: 1, 
    resizeMode: 'contain', 
    justifyContent: 'center', 
 }, 
 text: { 
    color:'#000000', 
    fontSize: 42, 
    fontWeight: 'bold', 
    textAlign: 'center', 
 }, 
 input: { 
    height: 40, 
    marginBottom: 10, 
    backgroundColor: '#fff', 
    paddingLeft: 10, 
 }, 
}); 
 
