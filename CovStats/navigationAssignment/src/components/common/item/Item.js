import React from 'react';

import {View, Text, FlatList, Image, LogBox} from 'react-native';
import {SvgUri} from 'react-native-svg';

import {standardizeData} from '../../../util/Util';

import {styles} from './item-styles';

const Item = props => {
  LogBox.ignoreAllLogs();
  const {data} = props;
  const {country, countryFlag, affected} = data;
  return (
    <View style={styles.containerList}>
      <View style={styles.countryContainer}>
        <View style={styles.countryFlag}>
          <SvgUri width={46.75} height={46.75} uri={countryFlag} />
        </View>
        <Text style={styles.countryName}>{country}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text>{standardizeData(affected)}</Text>

        {affected > 3000000 ? (
          <Image source={require('../../../assets/images/chevron-down.png')} />
        ) : (
          <Image source={require('../../../assets/images/chevron-up.png')} />
        )}
      </View>
    </View>
  );
};

export default Item;
