import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

import React from 'react';

const LifeSkillCard = () => {
  return (
    <View>
      <View
        style={{
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
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 8,
            left: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 5,
            zIndex: 10,
          }}>
          <TouchableOpacity>
            <Text style={{color: '#FFFFFF', fontSize: 10, fontWeight: 'bold'}}>
              Organization
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          style={{height: 120, width: 220}}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/7c0b/6aa2/61432cc7e69a59690d399a8f474f4e46?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tHfh4~B8Yy-yYi-O3dz8qm-8Hw1IQ0EZy-rOpVhu844opK7SsHE8Mm0pt-7sy002HJu2s6Db4jiXmkx~b7-oOGdISNJhO-adid4DT5mPZok~yIRM1m3gVPpwecuh5kFPeLVBFLwuvWo6NYPLkd-RZMR69-LH1FkxqXd4VarSWfo~qvqBU~sgceJwAq-Vi6~XJ4H5iXGYTusqfG3q3Is-rIAjrIBTbq7N9uoR5bvgDuejZPIpJMGMxP7ECA37ECkAmd-ozAfGmKKUsjD9YsuPuqBBA8i5ivANnq3XdLqCW1YjhsaSCES3SRoUEJeoKRlSFo~woWYXnGeWWGbRqLCy4Q__',
          }}
        />

        <View
          style={{
            paddingHorizontal: 10,
            height: 110,
            justifyContent: 'space-between',
            padding: 8,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Packing School Bag
          </Text>
          <Text style={{fontSize: 12, color: '#555'}}>
            Learn how to pack essentials & stay organized for school and
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 13, fontWeight: '500', color: '#1C67CD'}}>
              Learn more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LifeSkillCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#16192C',
  },
  description: {
    fontSize: 12,
    color: '#425466',
  },
});
