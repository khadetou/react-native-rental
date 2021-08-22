import React from 'react';
import {SafeAreaView, StyleSheet, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';
const onBordImg = require('../assets/onboardImage.jpg');

const {white, transparent} = COLORS;
export default function OnBoardScreen() {
  const {view, image} = styles;
  return (
    <SafeAreaView style={view}>
      <StatusBar translucent backgroundColor={transparent} />
      <Image source={onBordImg} style={image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: white,
  },
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
});
