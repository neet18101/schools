import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import Heading from '../SmallComponents/Heading';
import COLORS from '../../../constants/color';

const SkillCard = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Heading message="Skill Learning" />
      <View style={styles.videoContainer}>
        <YoutubeIframe
          height={180}
          width={'99%'}
          videoId="LlCwHnp3kL4"
          play={playing}
          onChangeState={onStateChange}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPlaying(!playing)}>
          <Text style={styles.buttonText}>{playing ? 'Pause' : 'Watch'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  videoContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
  button: {
    height: 28,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.white,
  },
});
