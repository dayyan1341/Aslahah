import * as React from 'react';
import { View,Text, StyleSheet, Image,Button } from 'react-native';
import Search from '../components/Search';
import Banner from '../components/Banner';
import ServicesShowcase from '../components/ServicesShowcase';
import ReviewCard from '../components/ReviewCard';

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hi,User</Text>
      <View style={styles.separator}/>
      <Text>Let's find your</Text>
      <Text>desired services</Text>
      <Image/>
      <Search/>
      <Banner/>
      <ServicesShowcase/>
      <View>
        <Text>What our clients say</Text>
        <ReviewCard/>
      </View>
      <Image/>
      <Button title='Become a Technician'></Button>

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({


})