import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

import axios from 'axios';

import {ChevronRight, ChevronLeft} from '../../../assets/images';
import Item from '../../../components/common/item/Item';
import ErrorScreen from '../../ErrorScreen/ErrorScreen';
import {AppColor} from '../../../theme/';

import {styles} from './homeScreen-styles';

export const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [page, handlePage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let firstPage, lastPage;
  page === 1 ? (firstPage = true) : (firstPage = false);
  page === 8 ? (lastPage = true) : (lastPage = false);

  const isDisableLastPage = lastPage ? true : false;
  const isDisableFirstPage = firstPage ? true : false;

  const handleDecrementPage = () => {
    if (page > 1) {
      handlePage(prevPage => prevPage - 1);
      getData(page - 1);
    }
  };

  const handleIncrementPage = () => {
    if (page < 8) {
      handlePage(prevPage => prevPage + 1);
      getData(page + 1);
    }
  };

  const getData = async pageNo => {
    try {
      const response = await axios.get(
        `https://6242c48cd126926d0c56bb9f.mockapi.io/covid19?limit=6&page=${pageNo}`,
      );
      setData(response.data);
    } catch (err) {
      console.log(err.response.status === 503);
      err.response.status === 503 ? <ErrorScreen /> : _;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(page);
  }, []);
  const colorFirstChevron = firstPage
    ? AppColor.Palette.gallery
    : AppColor.Palette.black;
  const colorLastChevron = lastPage
    ? AppColor.Palette.gallery
    : AppColor.Palette.black;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.heading}>Live Reports</Text>
          <Text style={styles.subheading}>Top five Countries</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={handleDecrementPage}
            disabled={isDisableFirstPage}>
            <ChevronLeft height={20} width={20} color={colorFirstChevron} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleIncrementPage}
            disabled={isDisableLastPage}>
            <ChevronRight height={20} width={20} color={colorLastChevron} />
          </TouchableOpacity>
        </View>
      </View>

      {data.length === 0 ? (
        <ActivityIndicator
          color={AppColor.Palette.wildWatermelon}
          animating={isLoading}
          size="large"
        />
      ) : (
        <FlatList data={data} renderItem={({item}) => <Item data={item} />} />
      )}
    </View>
  );
};
