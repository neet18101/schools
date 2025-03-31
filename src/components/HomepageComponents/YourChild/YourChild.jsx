import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Benifits from './Benifits';
import Heading from '../SmallComponents/Heading';

const YourChild = () => {
  return (
    <View style={{marginTop: 20, marginBottom: 20}}>
      <Heading message="Your Child's Learning Journey" />
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>2-3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>3-4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>4-5</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <Benifits />
          <Benifits />
          <Benifits />
          <Benifits />
        </View>
      </View>
    </View>
  );
};

export default YourChild;

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 110,
    backgroundColor: '#571D99',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
