// import React, {useEffect} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import {SCREENS} from './src/navigation/RoutesContants';
// import IntroScreen from './src/screens/IntroScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import BootSplash from 'react-native-bootsplash';
// import LoginScreen from './src/screens/LoginScreen';
// import OtpScreen from './src/screens/OtpScreen';
// import HomePage from './src/screens/HomePageScreen';

// const App = () => {
//   const Stack = createStackNavigator();
//   // const Drawer = createDrawerNavigator()
//   useEffect(() => {
//     const init = async () => {
//       // Load fonts, fetch data, etc.
//     };

//     init().finally(() => {
//       BootSplash.hide({fade: true}); // Fade out splash screen smoothly
//       console.log('Splash screen hidden');
//     });
//   }, []);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen
//           name={SCREENS.GET_STARTED_SCREEN}
//           component={IntroScreen}
//         />
//         <Stack.Screen
//           name={SCREENS.ON_BOARDING_SCREEN}
//           component={OnboardingScreen}
//         />
//         <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
//         <Stack.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
//         <Stack.Screen name={SCREENS.HOMEPAGE_SCREEN} component={HomePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// function Drawer() {
//   const Drawer = createStackNavigator();
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomePage} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {SCREENS} from './src/navigation/RoutesContants';
import IntroScreen from './src/screens/IntroScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import OtpScreen from './src/screens/OtpScreen';
import HomePage from './src/screens/HomePageScreen';
import Form from './src/screens/Form';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREENS.GET_STARTED_SCREEN} component={IntroScreen} />
    <Stack.Screen
      name={SCREENS.ON_BOARDING_SCREEN}
      component={OnboardingScreen}
    />
    <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
    <Stack.Screen name={SCREENS.HOMEPAGE_SCREEN} component={HomePage} />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{headerShown: false}}>
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
