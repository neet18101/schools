import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

import React from 'react';
import LifeSkillCard from './LifeSkillCard';
import {ScrollView} from 'react-native-gesture-handler';
import Heading from '../SmallComponents/Heading';

const SkillPage = () => {
  return (
    <View style={{marginTop: 20}}>
      <Heading message="Life Skills Hacks" />

      <ScrollView horizontal style={{marginTop: 10, display: 'flex', gap: 10}}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <LifeSkillCard />
          <LifeSkillCard />
          <LifeSkillCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default SkillPage;

const styles = StyleSheet.create({});
