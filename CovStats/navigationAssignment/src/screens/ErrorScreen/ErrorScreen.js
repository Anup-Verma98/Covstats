import {View, Text} from 'react-native';
import React from 'react';

const ErrorScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,0,0,0.5)',
      }}>
      <Text style={{fontSize: 32, color: 'white'}}>Server Error</Text>
    </View>
  );
};

export default ErrorScreen;
