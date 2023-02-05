import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';

import axios from 'axios';
import CircularProgress from 'react-native-circular-progress-indicator';

import {
  randomizePercentage,
  randomColorChooser,
  Kformatter,
} from '../../../util/Util';
import {Bell} from '../../../assets/images';
import {Legend2} from '../../../assets/images';
import {AppColor} from '../../../theme';
import LocationComponent from '../../../components/LocationComponent';

import {styles} from './mapScreen-styles';

export const MapScreen = () => {
  const [data, setData] = useState([]);
  const [colorChanged, setColorChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://6242c48cd126926d0c56bb9f.mockapi.io/covid19',
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    setIsLoading(isLoading);
    getData();
  }, []);

  const handleBellPress = () => {
    setColorChanged(!colorChanged);
  };

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.scrollView}>
      <View style={styles.mapContainer}>
        <Text style={styles.headerText}>COVID - 19 Affected Areas</Text>
        <View style={styles.legendsContainer}>
          <View style={styles.legendOne}>
            <Legend2 fill={AppColor.Palette.wildWatermelon} />
            <Text style={styles.affectedText}>Most Affected</Text>
          </View>
          <View style={styles.legendTwo}>
            <Legend2 fill={AppColor.Palette.salmon} />
            <Text style={styles.affectedText}>Least Affected</Text>
          </View>
        </View>

        <View style={styles.map}>
          <LocationComponent />
        </View>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.heading}>Top Countries</Text>

        {data.length === 0 ? (
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color={AppColor.Palette.wildWatermelon}
          />
        ) : (
          <View style={styles.countryListContainer}>
            {data?.slice(0, 3)?.map((item, index) => {
              return (
                <View
                  style={styles.listItemsContainer}
                  key={`${index}${item.country}`}>
                  <View style={styles.listItems}>
                    <View style={styles.pieChartContainer}>
                      <View style={styles.pieChart}>
                        <CircularProgress
                          value={randomizePercentage()}
                          radius={45.5}
                          valueSuffix="%"
                          inActiveStrokeColor={AppColor.Palette.mercury}
                          activeStrokeColor={randomColorChooser()}
                          progressValueColor={AppColor.Palette.black}
                        />
                      </View>
                    </View>

                    <View style={styles.covidDetails}>
                      <Text style={styles.countryName}>{item?.country}</Text>
                      <Text style={styles.text}>
                        Affected : {Kformatter(item?.affected)}
                      </Text>
                      <Text style={styles.text}>
                        Recovered : {Kformatter(item?.recovered)}
                      </Text>
                    </View>

                    <Bell
                      color={
                        item?.affected > 29852341 && colorChanged
                          ? AppColor.Palette.wildWatermelon
                          : AppColor.Palette.caribbeanGreen
                      }
                      onPress={handleBellPress}
                      style={styles.bellIcon}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};
