// App.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Header from './components/Header';
import MainContent from './components/MainContent';
import styled from "styled-components";

export default function MainStack({navigation}){
   const onPress = () => {
      navigation.navigate('MainCamera');
   }
 return (
    <View style={styles.container}>
      <Header />
      <MainContent />
      <ButtonContainer onPress={onPress}>
            <ButtonText><Image   
            source={require('./img/qr-scan.png')}
            style={{width: 60, height: 60}}/>
            </ButtonText>
         </ButtonContainer>
    </View>
    
 );
};

   const ButtonContainer = styled.TouchableOpacity`
       border-radius: 20px;
       background-color: #FD6F09;
       width: 100px;
       height: 100px;
       margin: 25px auto 10px
   `;
   
   const ButtonText = styled.Text`
       height: 770px;
       text-align:center;
       margin: -5px  0 0 0
   `;
   
   const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
 },
   });




