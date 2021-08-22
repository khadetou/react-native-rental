import {bold} from 'chalk';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  View,
  Text,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../constants/colors';
const onBordImg = require('../assets/onboardImage.jpg');

const {white, transparent, grey, dark} = COLORS;
export default function OnBoardScreen({navigation}) {
  const {
    view,
    image,
    indicatorContainer,
    indicator,
    indicatorActive,
    textView,
    title,
    text,
    buttonView,
    btn,
  } = styles;
  const indics = [
    {
      color: indicator,
    },
    {
      color: indicator,
    },
    {
      color: [indicator, indicatorActive],
    },
  ];
  return (
    <SafeAreaView style={view}>
      <StatusBar translucent backgroundColor={transparent} />
      <ScrollView>
        <Image source={onBordImg} style={image} />
        <View style={indicatorContainer}>
          {indics.map((indic, idx) => (
            <View style={indic.color} key={idx} />
          ))}
        </View>
        <View style={textView}>
          <View>
            <Text style={title}>Find Your sweet home</Text>
            <Text style={text}>
              Schedule visit in just few clicks visit in just few click
            </Text>
          </View>
        </View>
        <View style={buttonView}>
          <Pressable onPress={() => navigation.navigate('HomeScreen')}>
            <View style={btn}>
              <Text style={{color: white}}>Get Started</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
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
  indicatorContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: grey,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  indicatorActive: {
    backgroundColor: dark,
  },

  textView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    maxWidth: 250,
    lineHeight: 40,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    maxWidth: 250,
    lineHeight: 23,
    color: grey,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    marginTop: 60,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: dark,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
