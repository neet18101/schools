// OnboardingScreen.js
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Slide from './Slide';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: 1,
    image: require('../../../assets/Slide1.jpeg'), // Make sure this path is correct
    title: 'Easy Class',
    highlight: 'Booking',
    subtitle:
      'Choose the class timings that fit your schedule. Pick any available slot between 9 AM-9 PM effortlessly.',
  },
  {
    id: 2,
    image: require('../../../assets/Slide2.jpeg'), // Make sure this path is correct
    title: 'Change',
    highlight: 'Teacher',
    subtitle:
      "Easily switch teachers to match your child's learning needs and comfort level.",
  },
  {
    id: 3,
    image: require('../../../assets/Slide3.png'), // Make sure this path is correct
    title: 'Flexible',
    highlight: 'Payments',
    subtitle:
      'No monthly fees, no extra charges. Pay only for the days your child is present.',
  },
  {
    id: 4,
    image: require('../../../assets/Slide4.jpeg'), // Make sure this path is correct
    title: 'Progress',
    highlight: 'Tracking',
    subtitle:
      'Get real-time progress reports, attendance tracking, and performance insights at your fingertips.',
  },
];

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const scrollToNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      slidesRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    } else {
      console.log('Navigating to Login');
      navigation.replace('Login');
    }
  };

  const renderItem = ({item}) => (
    <View style={{width}}>
      <Slide
        item={item}
        scrollToNext={scrollToNext}
        currentIndex={currentIndex}
        slides={slides}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />

      <FlatList
        ref={slidesRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={scrollToNext}>
          <Text style={styles.nextButtonText}>
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  footer: {
    paddingHorizontal: 14,
    paddingBottom: 40,
    alignItems: 'center',
  },
  content: {
    flex: 1,
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

export default OnboardingScreen;
