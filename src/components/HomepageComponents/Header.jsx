import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Menu from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../constants/color';

const Header = () => {
  const navigation = useNavigation();

  const getFormattedDate = () => {
    const today = new Date();
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(today);
  };

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 16) {
      return 'Good Morning';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}>
        <Menu name="menu" size={18} color="#000000" />
      </TouchableOpacity>
      <View style={styles.middleSection}>
        <View>
          <Text style={styles.greetingText}>{getGreeting()}</Text>
          <Text style={styles.dateText}>{getFormattedDate()}</Text>
        </View>
        <TouchableOpacity style={styles.talkToExpertButton}>
          <Icon name="phone" size={12} color="#571D99" />
          <Text style={styles.talkToExpertText}>Talk to Expert</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate('ReDirect')}>
        <Icon name="map-pin" size={12} color="#571D99" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  menuButton: {
    paddingTop: 2,
  },
  middleSection: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 2,
    color: COLORS.black,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.gray,
  },
  talkToExpertButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.light_primary,
    padding: 1,
    height: 30,
    width: 120,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  talkToExpertText: {
    color: COLORS.primary,
    fontWeight: '500',
    fontSize: 12,
  },
  mapButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.light_primary,
    padding: 1,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
