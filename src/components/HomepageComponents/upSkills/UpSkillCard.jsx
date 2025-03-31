import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const UpSkillCard = ({title, description}) => {
  return (
    <View>
      <View
        style={{
          height: 200,
          width: 160,
          justifyContent: 'space-between',
          borderRadius: 5,
          alignItems: 'center',
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
            <Text style={{color: '#FFFFFF', fontSize: 8, fontWeight: 'bold'}}>
              Organization
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{height: 70, width: 100, marginTop: 2}}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/1270/92b7/7170d599602e84e13c2e46dc9fea2a74?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=axskIMb3Blu1VQdVipICWkRilE7MP7XsG2SmBxbYSd3njLVsLSOUFV9L4FlPJB7YgVWTHSEVh7lDga1MKAu5763USf4jzGaTJwKITp97OSCtaIFOfwvKsqg49fe~7DXqK5Ads5HOWYiygrmwAwuGJgOVhJzkvUfkonEBf~8MbgBIEz~iAKY4pDAhvSCKKJrXANbvfNqJseUJobjpKMJY-Gr0jSdBeQrUcrFNtckxndhNlQ4~IiF~zlRDNMJoT3l1HQUrydejnLr6AlukxJI72QTQ0xp0YTlZCvrKClkkeeMIigaxqXu2YAlISrc-A7HKWvyiSbHMAY-fVhc4d1rCZg__',
          }}
        />

        <View
          style={{
            paddingHorizontal: 10,
            height: 110,
            justifyContent: 'space-between',
            padding: 8,
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>
            {title}
          </Text>
          <Text style={{fontSize: 10, color: '#555'}}>{description}</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 10, fontWeight: '500', color: '#1C67CD'}}>
              Learn more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpSkillCard;

const styles = StyleSheet.create({});
