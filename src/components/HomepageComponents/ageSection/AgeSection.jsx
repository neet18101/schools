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
      image: require('../../../assets/images/age2.png'),
    },
    {
      id: '3',
      label: '4-5 Years',
      image: require('../../../assets/images/age2.png'),
    },
  ];
  const {width} = useWindowDimensions();
  const cardSize = Math.min(width * 0.3, 110);

  return (
    <View style={{marginTop: 20}}>
      <Heading message="Popular for you" />
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => console.log('Age 2-3 Years Selected')}
          style={{
            borderWidth: 1,
            borderColor: '#D9D9D9',
            height: 110,
            width: '30%',
            borderRadius: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/age2.png')}
            style={{height: 60, width: 40}}
          />
          <Text>2-3 Years</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Age 2-3 Years Selected')}
          style={{
            borderWidth: 1,
            borderColor: '#D9D9D9',
            height: 110,
            width: '30%',
            borderRadius: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/age2.png')}
            style={{height: 60, width: 40}}
          />
          <Text>2-3 Years</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Age 2-3 Years Selected')}
          style={{
            borderWidth: 1,
            borderColor: '#D9D9D9',
            height: 110,
            width: '30%',
            borderRadius: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/age2.png')}
            style={{height: 60, width: 40}}
          />
          <Text>2-3 Years</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgeSection;

const styles = StyleSheet.create({});
