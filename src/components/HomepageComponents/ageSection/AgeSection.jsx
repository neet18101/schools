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

const AgeSection = () => {
  const ageGroups = [
    {
      id: '1',
      label: '2-3 Years',
      image: require('../../../assets/images/age2.png'),
    },
    {
      id: '2',
      label: '3-4 Years',
      image: require('../../../assets/images/age3.png'),
    },
    {
      id: '3',
      label: '4-5 Years',
      image: require('../../../assets/images/age4.png'),
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
            onPress={() => console.log(`${item.label} Selected`)}
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
