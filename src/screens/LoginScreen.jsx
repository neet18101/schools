import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/color';
import AssetsStock from '../constants/ImagesContants';
import {ScrollView} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: COLORS.white}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
      <ScrollView style={styles.container}>
        <StatusBar hidden />

        <View style={styles.imageContainer}>
          <Image
            source={AssetsStock.login}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Sign in with your{'\n'} mobile number
          </Text>
          <Text style={styles.subtitle}>
            We will send you a Confirmation code
          </Text>

          <View style={styles.phoneInputContainer}>
            <Image source={AssetsStock.india} style={styles.flagIcon} />
            <View style={styles.divider} />
            <Text style={styles.countryCode}>+91 -</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="1234567890"
              keyboardType="numeric"
              maxLength={10}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <TouchableOpacity
            style={styles.otpButton}
            onPress={() => navigation.navigate('OtpScreen')}>
            <Text style={styles.otpButtonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white || '#FFFFFF',
  },
  imageContainer: {
    width: '100%',
    height: 350, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    resizeMode: 'contain',
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: '#D5B9F9',
    marginHorizontal: 8,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: COLORS.secondary || '#secondary',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: COLORS.gray || '#7D7D7D',
    marginBottom: 30,
    textAlign: 'center',
    width: 900,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: '#D5B9F9',
    borderRadius: 5,
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },
  countryCode: {
    fontSize: 16,
    color: COLORS.black || '#000000',
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 2,
    color: COLORS.black || '#000000',
  },
  otpButton: {
    fontFamily: 'Poppins-Bold',
    backgroundColor: COLORS.primary || '#571D99',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 5,

    width: '80%',
    height: 45,
    alignItems: 'center',
  },
  otpButtonText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.white || '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
