import React from 'react';
import {Text, View} from 'react-native';

export const SectionHeader = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 16, fontWeight: 600}}>Featured Services</Text>
      <Text style={{fontSize: 13, fontWeight: 400, color: '#1C67CD'}}>
        View All
      </Text>
    </View>
  );
};
