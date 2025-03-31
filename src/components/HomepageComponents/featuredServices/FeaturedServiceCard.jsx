import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const FeaturedServiceCard = ({heading, para}) => {
  return (
    <View
      style={{
        height: 220,
        width: 160,
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/ed4d/7de8/e7b0351cca7b783d4de39183480ff713?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E0Im5aMcL0lfCmX9GkYWp-bghISNMRskT1SW-V4Kakl~zu4hCmQT3Nhu6BsfPDEax9Z5GNiHyhzooq5ApNFhPNUjE~ag7HuJ6BayrpXtsg~H-duGPTLyVVakH~zIack0WURwa~nvhpNe-JBDstZnpkaIUWW~STaZEk8Bo5w~i4tFD1pj9cF6MfflEZ0EvzE6rWHyP-bCiVThShZGJR9EWCmtVYJAujrrHJU0TcKYpp6RDQZ-L-a2ikogmn0kpix4tCu71PCBGaDCxyM3wrHLe-fZvdXKx9E1VE4m3Ot7qlTf9ceKiKC-CZsIV1Vc2bV-4cI3T40-c644~5ZNIV-fkw__',
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,.5)', 'rgba(0,0,0,0.8)']}
            style={{
              height: '60%',
              paddingTop: 30,
              padding: 5,
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: '#fff',
                textAlign: 'center',
              }}>
              {heading}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: 'white',
                textAlign: 'center',
              }}>
              {para}
            </Text>
            <TouchableOpacity
              style={{
                height: 28,
                fontSize: 12,
                backgroundColor: '#571D99',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                paddingHorizontal: 15,
                borderRadius: 5,
              }}
              title="Book a now">
              <Text style={{fontSize: 10, fontWeight: '600', color: '#fff'}}>
                Book a now
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};
