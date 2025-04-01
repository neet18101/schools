import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/color';

const DrawerList = [
  {icon: 'home', label: 'Home', navigateTo: 'Home'},
  {icon: 'contact-phone', label: 'Contact Us', navigateTo: 'ReDirect'},
  {icon: 'help-outline', label: 'Need Help', navigateTo: 'ReDirect'},
];

const DrawerLayout = ({icon, label, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({size}) => <Icon name={icon} color={COLORS.primary} size={size} />}
      label={label}
      onPress={() => navigation.navigate(navigateTo)}
      style={styles.drawerItem}
    />
  );
};

const DrawerContent = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.profileWrapper}>
              <Image
                source={{
                  uri: 'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
                }}
                style={styles.profileImage}
              />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>Hetain</Text>
                <Text style={styles.profileEmail} numberOfLines={1}>
                  hetainsharma88@gmail.com
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          {DrawerList.map((item, index) => (
            <DrawerLayout key={index} {...item} />
          ))}
        </View>
      </DrawerContentScrollView>
      <View style={styles.signOutContainer}>
        <DrawerItem
          icon={({size}) => (
            <Icon name="logout" color={COLORS.danger} size={size} />
          )}
          label="Sign Out"
          onPress={() => navigation.navigate('ReDirect')}
          style={styles.drawerItem}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  profileContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    flex: 1,
  },
  signOutContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  drawerItem: {
    borderRadius: 5,
    MarginVertical: 2,
  },
});
