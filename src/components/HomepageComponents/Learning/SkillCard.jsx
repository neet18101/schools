import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import Heading from '../SmallComponents/Heading';

const SkillCard = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={{marginTop: 20}}>
      <Heading message="Skill Learning" />
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
          width: '100%',
          height: 200,
        }}>
        <YoutubeIframe
          height={180}
          width={'99%'}
          videoId="LlCwHnp3kL4"
          play={playing}
          onChangeState={onStateChange}
        />
        <TouchableOpacity
          style={{
            height: 28,
            fontSize: 12,
            backgroundColor: '#571D99',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            paddingHorizontal: 30,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={() => setPlaying(!playing)}>
          <Text style={{fontSize: 10, fontWeight: '600', color: '#fff'}}>
            {playing ? 'Pause' : 'Watch'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SkillCard;

const styles = StyleSheet.create({});
