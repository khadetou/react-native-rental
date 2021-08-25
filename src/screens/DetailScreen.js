import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';

const {width} = Dimensions.get('screen');
const {white, red, blue, grey, dark, light} = COLORS;
export default function DetailScreen({navigation, route}) {
  const {
    backgroundContainer,
    backgroundImage,
    header,
    headerBtn,
    virtualTag,
    detailContainer,
    ratingTag,
    facility,
    facilityText,
    interiorImage,
    footer,
    bookNow,
  } = styles;
  const data = route.params;

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

  const InteriorImage = ({image}) => {
    return <Image source={image} style={interiorImage} />;
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      <ScrollView>
        <View style={backgroundContainer}>
          <ImageBackground style={backgroundImage} source={data.image}>
            <View style={header}>
              <View style={headerBtn}>
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />
              </View>
              <View style={headerBtn}>
                <Icon name="favorite" size={20} color={red} />
              </View>
            </View>
          </ImageBackground>
          <View style={virtualTag}>
            <Text style={{color: white}}>Virtual Tour</Text>
          </View>
        </View>
        <View style={detailContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>{data.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={ratingTag}>
                <Text style={{color: white}}>4.8</Text>
              </View>
              <Text style={{fontSize: 13, marginLeft: 5}}>155 ratings</Text>
            </View>
          </View>
          <Text style={{fontSize: 16, color: grey}}>{data.location}</Text>

          <View style={{marginTop: 20, flexDirection: 'row'}}>
            {items.map((utility, idx) => (
              <View style={facility} key={idx}>
                {utility.icon}
                <Text style={facilityText}>{utility.text}</Text>
              </View>
            ))}
          </View>
          <Text style={{marginTop: 20, color: grey}}>{data.details}</Text>
          <FlatList
            keyExtractor={(_, key) => key.toString()}
            contentContainerStyle={{marginTop: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.interiors}
            renderItem={({item}) => <InteriorImage image={item} />}
          />
          <View style={footer}>
            <View>
              <Text style={{color: blue, fontSize: 18, fontWeight: '700'}}>
                1,500
              </Text>
              <Text style={{color: grey, fontSize: 12, fontWeight: '700'}}>
                Total Price
              </Text>
            </View>
            <View style={bookNow}>
              <Text style={{color: white}}>Book Now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },

  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },

  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  virtualTag: {
    top: -20,
    width: 120,
    backgroundColor: dark,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },

  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  facility: {
    flexDirection: 'row',
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: grey,
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 20,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: light,
  },
  bookNow: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
