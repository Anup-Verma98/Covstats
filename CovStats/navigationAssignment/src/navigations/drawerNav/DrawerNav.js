import React from 'react';

import DrawerContent from '../../components/drawerContent/DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AppColor} from '../../theme';
import {Drawers} from '../../constants/Constants';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const renderScreens = () => {
    return Drawers.map((item, index) => {
      const {name, component, Icon, title} = item;
      return (
        <Drawer.Screen
          name={name}
          key={index}
          component={component}
          initialParams={{icon: Icon}}
          options={{
            headerShown: false,
            title: title,
            drawerIcon: ({focused}) => {
              const color = focused
                ? AppColor.Palette.white
                : AppColor.Palette.quickSilver;

              return <Icon color={color} />;
            },
          }}
        />
      );
    });
  };
  // how to give custom Drawer -> follow below !
  // drawerContent={props => <DrawerContent {...props} />}
  return (
    <Drawer.Navigator
      screenOptions={{
        headerPressColor: 'red',
        drawerStatusBarAnimation: 'fade',
        drawerStyle: {
          width: 302,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      {renderScreens()}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
