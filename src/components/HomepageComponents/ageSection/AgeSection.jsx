import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Heading from '../SmallComponents/Heading';
import COLORS from '../../../constants/color';
import {useNavigation} from '@react-navigation/native';
import AssetsStock from '../../../constants/ImagesContants';

const AgeSection = () => {
  const navigation = useNavigation();
  const ageGroups = [
    {
      id: '1',
      label: '2-3 Years',
      image: AssetsStock.age2,
    },
    {
      id: '2',
      label: '3-4 Years',
      image: AssetsStock.age3,
    },
    {
      id: '3',
      label: '4-5 Years',
      image: AssetsStock.age4,
    },
  ];
  const {width} = useWindowDimensions();
  const cardSize = Math.min(width * 0.3, 110);

  return (
    <View style={styles.container}>
      <Heading message="Popular for you" />
      <View style={styles.cardContainer}>
        {ageGroups.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('ReDirect')}
            style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AgeSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cardContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
  },
  card: {
    borderWidth: 1,
    borderColor: COLORS.border,
    height: 110,
    width: '30%',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 40,
  },
  label: {
    fontWeight: '500',
  },
});
