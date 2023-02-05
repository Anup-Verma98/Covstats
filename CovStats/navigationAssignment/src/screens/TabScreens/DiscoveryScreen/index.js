import {View, Text} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export const DiscoveryScreen = () => {
  return (
    <WebView
      style={{marginHorizontal: 14, marginTop: 25}}
      source={{uri: 'https://covid19.who.int/table'}}
    />
  );
};
