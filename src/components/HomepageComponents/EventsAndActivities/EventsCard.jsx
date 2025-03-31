import React from 'react';
import {View, FlatList} from 'react-native';
import Heading from '../SmallComponents/Heading';
import Event from './Event';

const eventData = [
  {
    id: 1,
    title: 'Storytelling SessionsStorytelling Sessions',
    description: `Explore fun and interactive stories to boost imagination and listening skills. `,
    image: 'https://example.com/music-night.jpg',
  },
  {
    id: 2,
    title: 'Art Workshop',
    description: 'A creative workshop for art enthusiasts.',
    image: 'https://example.com/art-workshop.jpg',
  },
  {
    id: 3,
    title: 'Tech Conference',
    description: 'A gathering of tech experts and enthusiasts.',
    image: 'https://example.com/tech-conference.jpg',
  },
];

const EventsCard = () => {
  return (
    <View style={{marginTop: 20}}>
      <Heading message="Events & Activities" />
      <FlatList
        horizontal
        data={eventData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Event
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        contentContainerStyle={{paddingHorizontal: 10, gap: 10}}
      />
    </View>
  );
};

export default EventsCard;
