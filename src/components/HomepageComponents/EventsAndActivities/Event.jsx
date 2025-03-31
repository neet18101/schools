import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Event = ({title, description}) => {
  return (
    <View style={styles.card}>
      {/* Image Section */}
      <Image
        source={require('../../../assets/images/Events.jpeg')}
        style={styles.image}
      />

      {/* Text Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Session Details */}
        <View style={styles.detailsRow}>
          <View style={styles.detail}>
            <Icon name="time-outline" size={16} color="#425466" />
            <Text style={styles.detailText}>30 Mins</Text>
          </View>
          <View style={styles.detail}>
            <Icon name="person-outline" size={16} color="#425466" />
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}>Age 3-6</Text>
          </View>
          <View style={styles.detail}>
            <Icon
              name="chatbubble-ellipses-outline"
              size={16}
              color="#425466"
            />
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}>Interactive</Text>
          </View>
        </View>

        {/* Book Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book a Section</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#fff',
    paddingBottom: 12,
    borderRadius: 5,
    shadowColor: '#0C1A4B',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  content: {
    paddingHorizontal: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16192C',
    marginTop: 10,
    flexShrink: 1,
    numberOfLines: 2,
    ellipsizeMode: 'tail',
  },
  description: {
    fontSize: 14,
    color: '#425466',
    marginVertical: 6,
    flexShrink: 1,
    numberOfLines: 3,
    ellipsizeMode: 'tail',
  },
  detailsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#425466',
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#571D99',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 'auto',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
