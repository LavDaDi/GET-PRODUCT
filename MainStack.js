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
   const onPress_stats = () =>{
      navigation.navigate('Statist');
   }
   
   const onPress_instru = () =>{
      console.log('fdfd')
   }

   const StyledView = styled.View`
  background-color: #82cB00;
  border-radius: 20px;
  width: 316px;
  height: 260px;
`;

const StyledTitle = styled.Text`
   color: #FFF;
   font-size: 18px;
   font-weight: bold;
   margin: 30px 50px 0px 20px;
`;

const StyledText = styled.Text`
   color: #FFF;
   font-size: 16px;
   margin: 8px 50px 0px 20px;
  
`;

const ButtonContainer1 = styled.TouchableOpacity`
 elevation: 8;
 border-radius: 20px;
 background-color: #F8664F;
 width: 330px;
 height: 80px;
 padding-vertical: 14px;
`;

const ButtonContainer2 = styled.TouchableOpacity`
 elevation: 8;
 border-radius: 20px;
 background-color: #FFCA62;
 width: 330px;
 height: 82px;
 padding-vertical: 14px;
`;

const ButtonText1 = styled.Text`
 font-size: 26px;
 color: #fff;
 font-weight: bold;
 align-self: center;

`;

const ButtonText2 = styled.Text`
 font-size: 20px;

 text-align: center;
 color: #fff;
 font-weight: bold;
 align-self: center;

`;


 return (
    <View style={styles.container}>
      <Header />
    <View style={styles.content}>
      <ButtonContainer1 onPress={onPress_stats}>
         <ButtonText1>Статистика</ButtonText1>
      </ButtonContainer1>
      <ButtonContainer2 onPress={onPress_instru}>
         <ButtonText2>Руководство                                 по использованию </ButtonText2>
      </ButtonContainer2>
      <StyledView>
        <StyledTitle>Список продуктов на            сегодня:</StyledTitle>
        <StyledText>Картофель</StyledText> 
        <StyledText>Морковь</StyledText>
        <StyledText>Яблоки</StyledText>
        <StyledText>Бананы</StyledText>
      </StyledView>
    </View>

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
 content: {
   flex: 1,
   justifyContent: 'space-around',
   alignItems: 'center',
   padding: 30,
   backgroundColor: "#EEEEEE",
   borderRadius: 60,
   marginLeft: 20,
   marginRight: 20,
   marginTop: 20,
   
 },

   });




