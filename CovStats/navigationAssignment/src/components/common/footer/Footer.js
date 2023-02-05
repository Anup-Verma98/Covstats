import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footer}>
        © Copyright COVSTATS 2020. All rights reserved
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    fontSize: 14,
    // fontFamily: 'SF-Pro-Display-Regular',
  },
});
