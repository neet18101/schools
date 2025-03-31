import React from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import {FeaturedServiceCard} from './FeaturedServiceCard';
import Heading from '../SmallComponents/Heading';

const data = [
  {
    id: 1,
    heading: 'Choose Your Time Book a Class  Anytime',
    para: 'JavaScript is a versatile programming ',
  },
  {
    id: 2,
    heading: 'The Right Teacher for Your Child',
    para: 'React is a JavaScript .',
  },
  {
    id: 3,
    heading: 'No Extra Charges, Pay as You Go! ',
    para: 'APIs allow different ',
  },
];

export const FeaturedServices = () => {
  return (
    <View style={{marginTop: 20}}>
      <Heading message="Featured Services" />
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <FeaturedServiceCard heading={item.heading} para={item.para} />
        )}
        contentContainerStyle={{paddingHorizontal: 10, gap: 10}}
      />
    </View>
  );
};
