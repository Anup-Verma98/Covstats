import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const HamburgerButton = props => {
  const {Icon, press, color} = props;
  return (
    <TouchableOpacity onPress={press}>
      <Icon color={color} />
    </TouchableOpacity>
  );
};

export default HamburgerButton;
