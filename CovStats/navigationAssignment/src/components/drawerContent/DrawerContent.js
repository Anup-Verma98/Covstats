import React from 'react';
import {View, Text, Image, LogBox, Alert} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {AppColor} from '../../theme';
import Pro from '../../assets/images/drawer/PRO.svg';
import Rating from '../../assets/images/drawer/ratings.svg';

import {styles} from './drawerContent-styles';

const DrawerContent = props => {
  
  const handleLocationPress = () => {
    Alert.alert('Hello ji !');
  };

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const {state, navigation} = props;
  const {routes} = state;
  return (
    <DrawerContentScrollView style={styles.container} {...props}>
      <View style={styles.userInfoSection}>
        <Image
          style={styles.img}
          source={require('../../assets/images/drawer/profile.jpg')}
        />
        <Text style={styles.userName}>Rachel Brown</Text>
        <Text style={styles.location} onPress={handleLocationPress}>
          Location
        </Text>
        <View style={styles.userSpecificDetails}>
          <Pro />
          <Text style={styles.userType}>Seller</Text>
          <View style={styles.rating}>
            <Text style={styles.ratings}>4.8</Text>
            <Rating />
          </View>
        </View>
      </View>

      <View style={styles.containerRoutes}>
        {routes.map((item, index) => (
          <DrawerItem
            icon={item.params.icon}
            focused={index === state.index}
            label={item.name}
            key={index}
            activeTintColor={AppColor.Palette.white}
            inactiveTintColor={AppColor.Palette.black}
            activeBackgroundColor={AppColor.Palette.grape2}
            inactiveBackgroundColor={AppColor.Palette.white}
            onPress={() => navigation.navigate(item.name)}
            style={item.name === 'SignIn' ? styles.login : null}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
