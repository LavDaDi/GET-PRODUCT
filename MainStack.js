// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
 return (
    <View style={styles.container}>
      <Header />
      <MainContent />
      <Footer />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
 },
});

export default App;
