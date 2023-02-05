import {View, Text, FlatList, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import Item from '../item/Item';

const Card = props => {
  const {data} = props;
  const {country, affected, recovered} = data;
  return (
    <View>
      <ImageBackground
        style={{marginBottom: 12}}
        source={require('../../../assets/images/border.png')}>
        <View></View>
        <View>
          <Text>country:{country} </Text>
          <View>
            <Text>affected:{affected}</Text>
            <Text>recovered:{recovered}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
