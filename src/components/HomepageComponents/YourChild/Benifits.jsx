import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../constants/color';

const Benifits = ({title, subtitle, duration}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 12,
        marginVertical: 6,
        minHeight: 70,
        shadowColor: '#000',
        shadowOpacity: 0.03, // Slightly increased opacity for visibility
        shadowOffset: {width: 0, height: 1}, // Minimal offset
        shadowRadius: 3, // Reduced spread for a subtle effect
        elevation: 1, // Lower elevation for a softer look
        borderWidth: 0.5, // Thinner border
        borderColor: 'rgba(0, 0, 0, 0.1)', // Lighter border with transparency
      }}>
      <Icon
        name="brain-outline"
        size={24}
        color="#6B42D9"
        style={{marginRight: 10}}
      />

      <View style={{flex: 1}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          {title}
        </Text>
        <Text style={{fontSize: 13, color: '#666', marginTop: 3}}>
          {subtitle}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#DCFCE7',
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 12,
          alignSelf: 'flex-start',
        }}>
        <Text style={{color: '#2D9C5B', fontSize: 12, fontWeight: 'bold'}}>
          {duration}
        </Text>
      </View>

      <TouchableOpacity>
        <Icon name="chevron-down-outline" size={20} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

export default Benifits;
