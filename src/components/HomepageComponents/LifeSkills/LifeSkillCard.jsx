import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../../constants/color';

const LifeSkillCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.tagContainer}>
          <TouchableOpacity>
            <Text style={styles.tagText}>Organization</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/7c0b/6aa2/61432cc7e69a59690d399a8f474f4e46?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tHfh4~B8Yy-yYi-O3dz8qm-8Hw1IQ0EZy-rOpVhu844opK7SsHE8Mm0pt-7sy002HJu2s6Db4jiXmkx~b7-oOGdISNJhO-adid4DT5mPZok~yIRM1m3gVPpwecuh5kFPeLVBFLwuvWo6NYPLkd-RZMR69-LH1FkxqXd4VarSWfo~qvqBU~sgceJwAq-Vi6~XJ4H5iXGYTusqfG3q3Is-rIAjrIBTbq7N9uoR5bvgDuejZPIpJMGMxP7ECA37ECkAmd-ozAfGmKKUsjD9YsuPuqBBA8i5ivANnq3XdLqCW1YjhsaSCES3SRoUEJeoKRlSFo~woWYXnGeWWGbRqLCy4Q__',
          }}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Packing School Bag</Text>
          <Text style={styles.description}>
            Learn how to pack essentials & stay organized for school and
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ReDirect')}>
            <Text style={styles.learnMoreText}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LifeSkillCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 240,
    width: 220,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#0C1A4B',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.white,
  },
  tagContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    zIndex: 10,
  },
  tagText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  image: {
    height: 120,
    width: 220,
  },
  contentContainer: {
    paddingHorizontal: 10,
    height: 110,
    justifyContent: 'space-between',
    padding: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  description: {
    fontSize: 12,
    color: COLORS.text_gray,
  },
  learnMoreText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.primary,
  },
});
