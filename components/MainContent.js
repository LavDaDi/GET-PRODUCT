// MainContent.js
import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import styled from "styled-components";

const onPress_stats = () =>{
   console.log('fdfd')
}

const onPress_instru = () =>{
   console.log('fdfd')
}

const MainContent = () => {
 return (
    <View style={styles.content}>
      <ButtonContainer onPress={onPress_stats}>
         <ButtonText>Статистика</ButtonText>
      </ButtonContainer>
      <ButtonContainer2 onPress={onPress_instru}>
         <ButtonText2>Руководство                                 по использованию </ButtonText2>
      </ButtonContainer2>
      <StyledView>
        <StyledTitle>Список продуктов на            сегодня:</StyledTitle>
        <StyledText>Картофель</StyledText> 
        <StyledText>Картофель</StyledText>
        <StyledText>Картофель</StyledText>
        <StyledText>Картофель</StyledText>
      </StyledView>
    </View>
 );
};

const StyledView = styled.View`
  background-color: #82AB00;
  border-radius: 20px;
  width: 380px;
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

const ButtonContainer = styled.TouchableOpacity`
 elevation: 8;
 border-radius: 20px;
 background-color: #F8664F;
 width: 360px;
 height: 80px;
 padding-vertical: 14px;
`;

const ButtonContainer2 = styled.TouchableOpacity`
 elevation: 8;
 border-radius: 20px;
 background-color: #FFCA62;
 width: 360px;
 height: 82px;
 padding-vertical: 14px;
`;

const ButtonText = styled.Text`
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

const styles = StyleSheet.create({
 content: {
   flex: 1,
   justifyContent: 'space-around',
   alignItems: 'center',
   padding: 30,
   backgroundColor: "#EEEEEE",
   borderRadius: 60,
   marginTop: 20,
   
 },

});

export default MainContent;
