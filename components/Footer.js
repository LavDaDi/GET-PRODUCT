// Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
 return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>подвал</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 footer: {
    height: 60,
    backgroundColor: 'darkslateblue',
 },
 footerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
 },
});

export default Footer;
