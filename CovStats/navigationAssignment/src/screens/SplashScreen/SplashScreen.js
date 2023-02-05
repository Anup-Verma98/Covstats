import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Splash from '../../assets/images/splash.svg';
import Footer from '../../components/common/footer/Footer';

import {styles} from './splashScreen-styles';

const SplashScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Splash />
        <Text style={styles.caption}>COVSTATS</Text>
      </View>
      <Footer />
    </>
  );
};

export default SplashScreen;
