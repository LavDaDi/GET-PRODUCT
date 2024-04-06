// Footer.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styled from "styled-components";
 
const onPress = () => {
   console.log('dsdf')
}

const Footer = () => {
 return (
    <View style={styles.footer}>
      <ButtonContainer onPress={onPress}>
         <ButtonText><Image   
         source={require('../img/qr-scan.png')}
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
    margin: 0px  0 0 0
`;

const ButtonText = styled.Text`
    height: 770px;
    text-align:center;
    margin: -5px  0 0 0
`;

const styles = StyleSheet.create({
 footer: {
   marginTop: 30,
   marginBottom: 15,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
 },
 footerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
 },
});

export default Footer;
