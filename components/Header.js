// Header.js
import React from 'react';
import { View, StyleSheet, Image, Button, TouchableOpacity, } from 'react-native';
import styled from "styled-components";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ButtonContainer = styled.TouchableOpacity`
    border-radius: 20px;
    background-color: #969696;
    width: 114px;
    height: 77px;
    margin: 40px  0 0 0
`;

const ButtonText = styled.Text`
    height: 77px;
    text-align:center;
    margin: -10px  0 0 0
`;

const AppContainer = styled.View`
 justify-content: center; `;

const AppButton = ({ onPress, title }) => (
 <ButtonContainer onPress={onPress}>
    <ButtonText><Image   source={ {
        width:55,
        height:55,
        uri:'https://cdn-icons-png.flaticon.com/512/109/109596.png'
    }}/></ButtonText>
 </ButtonContainer>
);

const Header = () => {
 return (
    <View style={styles.header}>
      <Image  style={styles.logo} source={ require('../img/logo.png')}/>
      <AppContainer>
        <AppButton title=""/>
      </AppContainer>
    </View>
 );
};

const styles = StyleSheet.create({
 header: {
    height: 110,
    padding: 20,
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10,
 },
 
 logo: {
    width:90,
    height:60,
 },
});

export default Header;
