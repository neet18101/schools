import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/HomepageComponents/Header';
import BannerCarousel from '../components/HomepageComponents/banner/Banner';
import {SchoolTypeSection} from '../components/HomepageComponents/schoolTypeSection/SchoolTypeSection';
import AgeSection from '../components/HomepageComponents/ageSection/AgeSection';
import {FeaturedServices} from '../components/HomepageComponents/featuredServices/FeaturedServices';
import SkillCard from '../components/HomepageComponents/Learning/SkillCard';
import EventsCard from '../components/HomepageComponents/EventsAndActivities/EventsCard';
import SkillPage from '../components/HomepageComponents/LifeSkills/skillPage';
import QuizCard from '../components/HomepageComponents/Quiz/QuizCard';
import UpSkilling from '../components/HomepageComponents/upSkills/UpSkilling';
import YourChild from '../components/HomepageComponents/YourChild/YourChild';
import COLORS from '../constants/color';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <BannerCarousel />
          <SchoolTypeSection />
          <AgeSection />
          <FeaturedServices />
          <SkillCard />
          <EventsCard />
          <SkillPage />
          <QuizCard />
          <UpSkilling />
          <YourChild />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    // flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    padding: 10,
  },
});

export default HomePage;
