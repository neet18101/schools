import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  PixelRatio,
  Animated,
  Easing,
} from 'react-native';
import AssetsStock from '../constants/ImagesContants';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const IntroScreen = ({navigation}) => {
  // Create animated values for both coins
  const rightBounceValue = new Animated.Value(0);
  const leftBounceValue = new Animated.Value(0);

  // Bounce animation function
  const startBounceAnimation = animatedValue => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: -10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startBounceAnimation(rightBounceValue);
    startBounceAnimation(leftBounceValue);
  }, []);

  return (
    <View style={styles.container}>
      {/* Left Coin with animation */}
      <View style={[styles.topLeftContainer]}>
        <Image
          source={AssetsStock.book}
          style={styles.topLeftLogo}
          resizeMode="contain"
        />
      </View>

      {/* Right Coin with animation */}
      <Animated.View
        style={[
          styles.topRightContainer,
          {
            transform: [{translateY: rightBounceValue}],
          },
        ]}>
        <Image
          source={AssetsStock.coins}
          style={styles.topRightLogo}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Image
          source={AssetsStock.logo}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Join With 10k Other People</Text>
          <Text style={styles.subText}>
            Join with us and find your best preschool
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('OnBoarding')}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B5EBB',
    padding: normalize(40),
  },
  topLeftContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? normalize(50) : normalize(30),
    left: normalize(20),
    zIndex: 1,
  },
  topRightContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? normalize(50) : normalize(30),
    right: normalize(20),
    zIndex: 1,
  },
  topLeftLogo: {
    width: normalize(50),
    height: normalize(50),
    padding: normalize(10),
  },
  topRightLogo: {
    width: normalize(50),
    height: normalize(50),
    padding: normalize(10),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.25,
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: normalize(70),
  },
  textContainer: {
    width: '90%',
    alignItems: 'center',
  },
  heading: {
    fontSize: normalize(32),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: normalize(10),
    marginTop: normalize(10),
  },
  subText: {
    fontSize: 16,
    width: '100%',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: normalize(50),
    lineHeight: normalize(42),
  },
  button: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(30),
    alignItems: 'center',
    width: '100%',
    height: normalize(60),
    borderWidth: 3,
    borderColor: '#D8D5EA',
    borderRadius: 50,
    maxWidth: 500,
  },
  buttonText: {
    fontSize: normalize(16),
    fontWeight: '500',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default IntroScreen;
