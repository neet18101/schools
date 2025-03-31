import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from './src/navigation/RoutesContants';
import IntroScreen from './src/screens/IntroScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import BootSplash from 'react-native-bootsplash';
import LoginScreen from './src/screens/LoginScreen';
import OtpScreen from './src/screens/OtpScreen';
import HomePage from './src/screens/HomePageScreen';
const App = () => {
  const Stack = createStackNavigator();
  useEffect(() => {
    const init = async () => {
      // Load fonts, fetch data, etc.
    };

    init().finally(() => {
      BootSplash.hide({fade: true}); // Fade out splash screen smoothly
      console.log('Splash screen hidden');
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREENS.GET_STARTED_SCREEN}
          component={IntroScreen}
        />
        <Stack.Screen
          name={SCREENS.ON_BOARDING_SCREEN}
          component={OnboardingScreen}
        />
        <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
        <Stack.Screen name={SCREENS.HOMEPAGE_SCREEN} component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
