// Slide.js
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Slide = ({item, scrollToNext, currentIndex, slides}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          <Text>{item.title}</Text>
          <Text style={styles.highlight}> {item.highlight}</Text>
        </Text>
        <Text style={styles.subtitle}>
          {item.subtitle.split('. ').join('.\n')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D3D3D',
    textAlign: 'center',
    marginBottom: 16,
  },
  highlight: {
    color: '#571D99',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#696969',
    textAlign: 'center',
    lineHeight: 30,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 14,
    paddingBottom: 40,
    alignItems: 'center',
    paddingTop: 30,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#9B9B9A',
    marginHorizontal: 4,
  },

  paginationDotActive: {
    backgroundColor: '#16A34A',
    width: 35,
  },

  nextButton: {
    backgroundColor: '#571D99',
    width: '100%',
    maxWidth: 300,
    paddingVertical: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Slide;
