import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/PreSchool.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.heading}>Join With 10k Other People</Text>
        <Text style={styles.subText}>
          Join with us and find your best preschool
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OnBoarding')}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A5FDC',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  image: {
    width: 321,
    height: 271,
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
  },
});

export default App;
