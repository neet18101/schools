import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window');

const banners = [
  {
    id: '1',
    title: 'Personalized Learning for Your Child!',
    subtitle: 'Choose Their Age Group to Begin',
    image: require('../../../assets/images/baby.png'),
  },
  {
    id: '2',
    title: 'Fun Learning Experience!',
    subtitle: 'Engaging activities for kids',
    image: require('../../../assets/images/baby.png'),
  },
  {
    id: '3',
    title: 'Start Their Journey Today!',
    subtitle: 'Interactive and enjoyable lessons',
    image: require('../../../assets/images/baby.png'),
  },
];

const BannerItem = ({item}) => (
  <View style={styles.banner}>
    <View style={{width: '55%', justifyContent: 'center'}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
    <View
      style={{width: '45%', alignItems: 'flex-end', justifyContent: 'center'}}>
      <Image style={styles.image} source={item.image} />
    </View>
  </View>
);

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = event => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <BannerItem item={item} />}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {/* Pagination Indicator */}
      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor: index === activeIndex ? '#2D73F5' : '#E0E0E0',
                width: index === activeIndex ? 20 : 20,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default BannerCarousel;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#58BF68',
    height: 145,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 15,
    overflow: 'hidden',
    width: width * 0.9,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  paginationDot: {
    height: 6,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});
