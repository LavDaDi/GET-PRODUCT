// MainContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainContent = () => {
 return (
    <View style={styles.content}>
      <Text style={styles.contentText}>Основное содержимое</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 contentText: {
    fontSize: 20,
 },
});

export default MainContent;
