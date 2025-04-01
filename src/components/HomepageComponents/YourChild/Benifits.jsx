import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../constants/color';

const Benifits = ({title, subtitle, duration}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(duration);
  const durationOptions = ['3 months', '6 months', '9 months', '1 year'];

  const handleSelect = value => {
    setSelectedDuration(value);
    setModalVisible(false); // Close modal after selection
  };

  return (
    <View style={styles.container}>
      <Icon name="games" size={24} style={styles.icon} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.durationContainer}>
        <Text style={styles.duration}>{selectedDuration}</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.dropdownButton}>
          <Icon name="arrow-drop-down" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: 250,
            }}>
            <FlatList
              data={durationOptions}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <Text style={{padding: 10, fontSize: 16}}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    minHeight: 70,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  icon: {
    marginRight: 10,
    color: COLORS.primary,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.text_gray,
    marginTop: 3,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  duration: {
    color: '#2D9C5B',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default Benifits;
