import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ValidateProfile = props => {
  const {press, Icon, verified, color} = props;
  const fill = verified ? color[0] : color[1];
  return (
    <TouchableOpacity onPress={press}>
      <Icon fill={fill} />
    </TouchableOpacity>
  );
};

export default ValidateProfile;
