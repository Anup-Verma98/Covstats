import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingScreen from '../../screens/OnBoardingScreen/OnBoardingScreen';

import MyTabs from '../tabNav/TabNav';

const AppStack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="Onboarding" component={OnBoardingScreen} />
        <AppStack.Screen name="Home" component={MyTabs} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
