import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import UpSkillCard from './UpSkillCard';
import Heading from '../SmallComponents/Heading';

const upSkillData = [
  {
    id: '1',
    title: 'DIY Science Experiments',
    description: 'Make learning science fun through practical activities that',
  },
  {
    id: '2',
    title: 'DIY Science Experiments',
    description: 'Make learning science fun through practical activities that',
  },
  {
    id: '3',
    title: 'DIY Science Experiments',
    description: 'Make learning science fun through practical activities that',
  },
  {
    id: '4',
    title: 'DIY Science Experiments',
    description: 'Make learning science fun through practical activities that',
  },
];

const UpSkilling = () => {
  return (
    <View style={styles.container}>
      <Heading message="Upskilling" />
      <FlatList
        data={upSkillData}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <UpSkillCard title={item.title} description={item.description} />
        )}
      />
    </View>
  );
};

export default UpSkilling;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});
