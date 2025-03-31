import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 60,

        alignSelf: 'center',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
      }}>
      <View
        style={{
          paddingTop: 2,
        }}>
        <Icon name="menu" size={18} color="#000000" />
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 22,
              marginBottom: 2,
              // fontFamily: 'Poppins-Regular'
            }}>
            Good Evening
          </Text>
          <Text style={{fontSize: 12, fontWeight: 400, color: '#9B9B9A'}}>
            Tuesday, May 12, 2025
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F3E9FF',
            padding: 1,
            height: 30,
            width: 120,

            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Icon name="phone" size={12} color="#571D99" />
          <Text style={{color: '#571D99', fontWeight: 500, fontSize: 12}}>
            Talk to Expert
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F3E9FF',
          padding: 1,
          height: 30,
          width: 30,
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Icon name="map" size={12} color="#571D99" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    borderColor: 'blue',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#000',
  },
});
