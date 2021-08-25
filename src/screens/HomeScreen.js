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
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';
import data from '../constants/data';
import Person from '../assets/person.jpg';

const {width} = Dimensions.get('screen');
const {white, blue, grey, dark, light} = COLORS;
export default function HomeScreen({navigation}) {
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
    card,
    cardImg,
    facility,
    facilityText,
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

  const Card = ({data}) => {
    const {image, title, location} = data;
    const items = [
      {
        icon: <Icon name="hotel" size={18} />,
        text: '2',
      },
      {
        icon: <Icon name="bathtub" size={18} />,
        text: '2',
      },
      {
        icon: <Icon name="aspect-ratio" size={18} />,
        text: '100 m',
      },
    ];
    return (
      <Pressable onPress={() => navigation.navigate('DetailScreen', data)}>
        <View style={card}>
          <Image source={image} style={cardImg} />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>{title}</Text>
            <Text style={{fontSize: 16, fontWeight: '700', color: blue}}>
              $1,500
            </Text>
          </View>
          <Text style={{color: grey, marginTop: 5, fontSize: 14}}>
            {location}
          </Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            {items.map((utility, idx) => (
              <View style={facility} key={idx}>
                {utility.icon}
                <Text style={facilityText}>{utility.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </Pressable>
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
        <FlatList
          snapToInterval={width - 20}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({item}) => <Card data={item} />}
        />
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
  card: {
    height: 280,
    backgroundColor: white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImg: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  facility: {
    flexDirection: 'row',
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: grey,
  },
});
