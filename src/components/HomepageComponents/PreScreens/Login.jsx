import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../../constants/color';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  //   const handleSendOTP = () => {
  //     if (phoneNumber.length < 10) {
  //       Alert.alert('Invalid Number', 'Please enter a valid 10-digit number.');
  //       return;
  //     }
  //     Alert.alert('OTP Sent', 'Verification code sent to ' + phoneNumber);
  //     // Add your OTP logic here
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.viewContainer}>
        <View style={styles.secure_images}>
          <Image
            source={require('../../../assets/Login.png')}
            resizeMode="contain"
            style={styles.secure_images}
          />
        </View>

        <Text style={styles.title}>Sign in with your </Text>
        <Text style={styles.title}> mobile number</Text>
        <Text style={styles.subtitle}>
          We will send you a Confirmation code
        </Text>

        {/* <View style={styles.phoneInputContainer}>
          <PhoneInput
              country={'us'}
              value={this.state.phone}
              onChange={phone => this.setState({phone})}
            />
            
        </View> */}
        <View style={styles.phoneInputContainer}>
          <Image
            source={require('../../../assets/India.jpg')} // Add your flag image here
            style={styles.flagIcon}
          />

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
          onPress={() => navigation.navigate('Otp')}>
          <Text style={styles.otpButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white || '#FFFFFF',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: COLORS.white || '#FFFFFF',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secure_images: {
    width: 400,
    height: 400,

    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
    color: COLORS.secondary || '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray || '#7D7D7D',
    marginBottom: 30,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: '#D5B9F9',
    borderRadius: 5,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 5,
    color: COLORS.black || '#000000',
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: COLORS.black || '#000000',
  },
  otpButton: {
    backgroundColor: COLORS.primary || '#6200EA',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  otpButtonText: {
    color: COLORS.white || '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 20,
  },
  countryCode: {
    fontSize: 16,
    color: COLORS.black || '#000000',
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: COLORS.black || '#000000',
  },
});
