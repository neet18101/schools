import React, {useEffect, useRef, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SCREENS} from './src/navigation/RoutesContants';
import COLORS from './src/constants/color';

// Screens
import IntroScreen from './src/screens/IntroScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import OtpScreen from './src/screens/OtpScreen';
import HomePage from './src/screens/HomePageScreen';
import RedirectScreen from './src/components/OtherScreens/RedirectScreen';
import DrawerContent from './src/navigation/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREENS.GET_STARTED_SCREEN} component={IntroScreen} />
    <Stack.Screen
      name={SCREENS.ON_BOARDING_SCREEN}
      component={OnboardingScreen}
    />
    <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
    <Stack.Screen name={SCREENS.HOMEPAGE_SCREEN} component={TabNavigator} />
    <Stack.Screen name={SCREENS.REDIRECT} component={RedirectScreen} />
  </Stack.Navigator>
);

const TABS = [
  {
    name: 'Homepage',
    component: HomePage,
    icon: 'home-outline',
    iconFocused: 'home',
  },
  {
    name: 'Progress',
    component: RedirectScreen,
    icon: 'time-outline',
    iconFocused: 'time',
  },
  {
    name: 'Classes',
    component: RedirectScreen,
    icon: 'school-outline',
    iconFocused: 'school',
  },
  {
    name: 'Teachers',
    component: RedirectScreen,
    icon: 'people-outline',
    iconFocused: 'people',
  },
  {
    name: 'Dashboard',
    component: RedirectScreen,
    icon: 'grid-outline',
    iconFocused: 'grid',
  },
];

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => {
      const tab = TABS.find(t => t.name === route.name) || {
        icon: 'help-outline',
        iconFocused: 'help',
      };

      return {
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => (
          <Ionicons
            name={focused ? tab.iconFocused : tab.icon}
            size={20}
            color={color}
          />
        ),
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 10, fontWeight: '600'},
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarStyle: {
          height: 75,
          paddingBottom: 5,
          borderTopWidth: 1,
          borderColor: COLORS.border,
          backgroundColor: COLORS.white,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 2,
        },
      };
    }}>
    {TABS.map(tab => (
      <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
    ))}
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Home" component={StackNavigator} />
  </Drawer.Navigator>
);

const App = () => {
  useEffect(() => {
    const init = async () => {
      // Load fonts, fetch data, etc.
    };
    init().finally(() => {
      BootSplash.hide({fade: true});
      console.log('Splash screen hidden');
    });
  }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
