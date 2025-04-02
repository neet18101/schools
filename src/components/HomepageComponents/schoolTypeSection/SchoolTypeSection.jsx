import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import React from 'react';
import AssetsStock from '../../../constants/ImagesContants';

export const SchoolTypeSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={AssetsStock.Pre_School} style={styles.image} />
        <Text style={styles.title}>Preschool</Text>
      </View>
      <View style={styles.card}>
        <Image source={AssetsStock.Day_Care} style={styles.image} />
        <Text style={styles.title}>Day care</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    width: '49%',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2 / 1.8,
    borderRadius: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
