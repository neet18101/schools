import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';
import {useNavigation} from '@react-navigation/native';

const UpSkillCard = ({title, description}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.categoryTag}>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Organization</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/1270/92b7/7170d599602e84e13c2e46dc9fea2a74?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=axskIMb3Blu1VQdVipICWkRilE7MP7XsG2SmBxbYSd3njLVsLSOUFV9L4FlPJB7YgVWTHSEVh7lDga1MKAu5763USf4jzGaTJwKITp97OSCtaIFOfwvKsqg49fe~7DXqK5Ads5HOWYiygrmwAwuGJgOVhJzkvUfkonEBf~8MbgBIEz~iAKY4pDAhvSCKKJrXANbvfNqJseUJobjpKMJY-Gr0jSdBeQrUcrFNtckxndhNlQ4~IiF~zlRDNMJoT3l1HQUrydejnLr6AlukxJI72QTQ0xp0YTlZCvrKClkkeeMIigaxqXu2YAlISrc-A7HKWvyiSbHMAY-fVhc4d1rCZg__',
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ReDirect')}>
            <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpSkillCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 160,
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  categoryTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    zIndex: 10,
  },
  categoryText: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: 'bold',
  },
  image: {
    height: 70,
    width: 100,
    marginTop: 2,
  },
  textContainer: {
    paddingHorizontal: 10,
    height: 110,
    justifyContent: 'space-between',
    padding: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  description: {
    fontSize: 10,
    color: COLORS.text_gray,
  },
  learnMore: {
    fontSize: 10,
    fontWeight: '500',
    color: COLORS.primary,
  },
});
