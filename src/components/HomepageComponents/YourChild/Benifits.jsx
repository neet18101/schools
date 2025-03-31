import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Benifits = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginVertical: 6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        elevation: 3,
      }}>
      <Icon
        name="brain-outline"
        size={24}
        color="#6B42D9"
        style={{marginRight: 10}}
      />

      <View style={{flex: 1}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          Colors & Shapes
        </Text>
        <Text style={{fontSize: 13, color: '#666', marginTop: 3}}>
          Recognizing basic colors and geometric shapes
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#E6FAEA',
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 12,
          marginRight: 8,
        }}>
        <Text style={{color: '#2D9C5B', fontSize: 12, fontWeight: 'bold'}}>
          3 Months
        </Text>
      </View>

      <TouchableOpacity>
        <Icon name="chevron-down-outline" size={20} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

export default Benifits;
