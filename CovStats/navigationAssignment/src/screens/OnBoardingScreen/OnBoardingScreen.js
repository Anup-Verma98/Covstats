import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

import {AppColor} from '../../theme';

const MyButtonComponent = ({skipLabel, ...props}) => {
  return (
    <TouchableOpacity color="black" {...props}>
      {skipLabel}
      <Text
        style={{
          marginRight: 15,
          color: AppColor.Palette.black,
          fontSize: 17,
        }}>
        Done
      </Text>
    </TouchableOpacity>
  );
};

const MyDotComponent = ({isLight, selected}) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected
      ? AppColor.Palette.wildWatermelon
      : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#000' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 8,
        height: 8,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 100,
      }}
    />
  );
};

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
      bottomBarHighlight={false}
      onDone={() => navigation.navigate('Home')}
      bottomBarColor="white"
      DotComponent={MyDotComponent}
      DoneButtonComponent={MyButtonComponent}
      onSkip={() => navigation.navigate('Home')}
      titleStyles={{
        fontSize: 28,
        fontWeight: '600',
      }}
      subTitleStyles={{
        marginHorizontal: 25,
        fontSize: 16,
        fontWeight: '300',
        color: AppColor.Palette.quickSilver2,
        letterSpacing: 0.5,
      }}
      pages={[
        {
          backgroundColor: AppColor.Palette.white,
          image: <Image source={require('../../assets/images/Fever.png')} />,
          title: 'Fever',
          subtitle:
            'He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic medical conditions.',
        },
        {
          backgroundColor: AppColor.Palette.white,
          image: <Image source={require('../../assets/images/Cough.png')} />,
          title: 'Cough',
          subtitle:
            'Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.',
        },
        {
          backgroundColor: AppColor.Palette.white,
          image: <Image source={require('../../assets/images/Breathe.png')} />,
          title: 'Breathing Difficulty',
          subtitle:
            'Contact your doctor or clinic right away if you have COVID-19 symptoms, you’ve been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19.',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
