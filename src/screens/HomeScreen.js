import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';
import Person from '../assets/person.jpg';

const {width} = Dimensions.get('screen');
const {white, transparent, grey, dark, light} = COLORS;
export default function HomeScreen() {
  const {
    header,
    profileImg,
    inputContainer,
    sortBtn,
    optionListContainer,
    optionCard,
    optionCardImg,
    categoryListContainer,
    containerListText,
    activeCategoryList,
  } = styles;

  const ListCategories = () => {
    const [categoryIdx, setCategoryIdx] = useState(0);
    const categoryList = ['Popular', 'Recommended', 'Nearest'];
    return (
      <View style={categoryListContainer}>
        {categoryList.map((category, idx) => (
          <Pressable key={idx} onPress={() => setCategoryIdx(idx)}>
            <Text
              style={[
                containerListText,
                idx == categoryIdx && activeCategoryList,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    const optionsList = [
      {title: 'Buy a House', img: require('../assets/house1.jpg')},
      {title: 'Rent a House', img: require('../assets/house2.jpg')},
    ];
    return (
      <View style={optionListContainer}>
        {optionsList.map((option, idx) => (
          <View style={optionCard} key={idx}>
            <Image source={option.img} style={optionCardImg} />
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: '700'}}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: white, flex: 1}}>
      <StatusBar
        translucent={false}
        backgroundColor={white}
        barStyle="dark-content"
      />
      <View style={header}>
        <View>
          <Text style={{color: grey}}>Location</Text>
          <Text style={{color: dark, fontSize: 20, fontWeight: '700'}}>
            Canada
          </Text>
        </View>
        <Image source={Person} style={profileImg} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={inputContainer}>
            <Icon name="search" size={25} color={grey} />
            <TextInput placeholder="Search address city, location" />
          </View>

          <View style={sortBtn}>
            <Icon name="tune" color={white} size={25} />
          </View>
        </View>
        <ListOptions />
        <ListCategories />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  inputContainer: {
    height: 50,
    backgroundColor: light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    backgroundColor: white,
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionCardImg: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  categoryListContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  containerListText: {
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 5,
    color: grey,
  },
  activeCategoryList: {
    color: dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
