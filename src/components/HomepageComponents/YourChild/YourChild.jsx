import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Benifits from './Benifits';
import Heading from '../SmallComponents/Heading';
import COLORS from '../../../constants/color';

const courseDetails = {
  '2-3': [
    {
      title: 'Colors & Shapes',
      subtitle: 'Recognize basic colors and geometric shapes',
      duration: '3 months',
    },
    {
      title: 'Numbers & Counting',
      subtitle: 'Learn to count and recognize numbers',
      duration: '4 months',
    },
    {
      title: 'Alphabet Fun',
      subtitle: 'Identify letters and basic phonics',
      duration: '3 months',
    },
    {
      title: 'Animal World',
      subtitle: 'Discover different animals and their habitats',
      duration: '2 months',
    },
    {
      title: 'Music & Rhythm',
      subtitle: 'Explore sounds, beats, and simple songs',
      duration: '3 months',
    },
  ],
  '3-4': [
    {
      title: 'Science Basics',
      subtitle: 'Introduction to basic science concepts',
      duration: '5 months',
    },
    {
      title: 'Creative Art',
      subtitle: 'Learn drawing, painting, and crafting',
      duration: '4 months',
    },
    {
      title: 'Story Time',
      subtitle: 'Listen to and understand fun stories',
      duration: '3 months',
    },
    {
      title: 'Outdoor Play',
      subtitle: 'Physical activities and sports for kids',
      duration: '2 months',
    },
    {
      title: 'Healthy Eating',
      subtitle: 'Learn about nutritious food and healthy habits',
      duration: '3 months',
    },
  ],
  '4-5': [
    {
      title: 'Technology for Kids',
      subtitle: 'Introduction to basic coding and gadgets',
      duration: '4 months',
    },
    {
      title: 'World Cultures',
      subtitle: 'Explore traditions and customs from around the world',
      duration: '3 months',
    },
    {
      title: 'Math Adventures',
      subtitle: 'Fun with numbers, patterns, and simple equations',
      duration: '5 months',
    },
    {
      title: 'Space Exploration',
      subtitle: 'Learn about planets, stars, and astronauts',
      duration: '2 months',
    },
    {
      title: 'Mindfulness & Yoga',
      subtitle: 'Basic breathing exercises and relaxation techniques',
      duration: '3 months',
    },
  ],
};

const YourChild = () => {
  const [selectedAge, setSelectedAge] = useState('2-3');

  return (
    <View style={{marginTop: 20, marginBottom: 20}}>
      <Heading message="Your Child's Learning Journey" />
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {['2-3', '3-4', '4-5'].map(age => (
            <TouchableOpacity
              key={age}
              style={[
                styles.button,
                selectedAge === age && styles.selectedButton,
              ]}
              onPress={() => setSelectedAge(age)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedAge === age && styles.selectedButtonText,
                ]}>
                {age}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Display Benefits Based on Age Selection */}
        <View style={{marginTop: 10}}>
          {courseDetails[selectedAge].map((course, index) => (
            <Benifits
              key={index}
              title={course.title}
              subtitle={course.subtitle}
              duration={course.duration}
            />
          ))}
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
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 14,
  },
  selectedButtonText: {
    color: COLORS.white,
  },
});
