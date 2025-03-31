import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Heading = ({message}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <Text style={{fontSize: 16, fontWeight: 600}}>{message}</Text>
      <TouchableOpacity
        style={{fontSize: 13, fontWeight: 400, color: '#1C67CD'}}>
        <Text style={{fontSize: 13, fontWeight: 400, color: '#1C67CD'}}>
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});
