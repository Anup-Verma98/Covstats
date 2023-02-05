import React, {useState} from 'react';

import {Alert, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HamburgerButton from '../../components/hamburgerButton/HamburgerButton';

import {AppColor} from '../../theme';
import {Tabs} from '../../constants/RouteNames';
import {Hamburger, Profile} from '../../assets/images';
import ValidateProfile from '../../components/validateProfile/ValidateProfile';

const Tab = createBottomTabNavigator();

const MyTabs = ({navigation}) => {
  const [isVerifed, setIsVerified] = useState(false);

  const handleProfilePress = () => {
    Alert.alert('Profile Verified!');
    setIsVerified(!isVerifed);
  };
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const headerStyle = {
    shadowColor: AppColor.Palette.black100,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
  };
  const headerLeftContainerStyle = {
    paddingLeft: 14,
  };
  const headerRightContainerStyle = {
    paddingRight: 14,
  };

  const renderScreens = () => {
    return Tabs.map((item, index) => {
      const {name, component, Icon, title} = item;

      return (
        <Tab.Screen
          name={name}
          component={component}
          key={`${index}${name}`}
          options={{
            headerStyle,
            headerLeftContainerStyle,
            headerRightContainerStyle,
            title: title,
            tabBarLabel: name,
            tabBarActiveTintColor: AppColor.Palette.wildWatermelon,
            headerLeft: () => (
              <HamburgerButton
                Icon={Hamburger}
                press={handleDrawer}
                color={AppColor.Palette.quickSilver2}
              />
            ),
            headerRight: () => (
              <ValidateProfile
                press={handleProfilePress}
                Icon={Profile}
                verified={isVerifed}
                color={[
                  AppColor.Palette.caribbeanGreen,
                  AppColor.Palette.white,
                ]}
              />
            ),
            tabBarIcon: ({focused}) => {
              const color = focused
                ? AppColor.Palette.wildWatermelon
                : AppColor.Palette.quickSilver;
              return <Icon color={color} />;
            },
          }}
        />
      );
    });
  };
  return <Tab.Navigator>{renderScreens()}</Tab.Navigator>;
};

export default MyTabs;
