// @app
import React, { useRef } from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, View } from 'react-native';
import Header from '../../components/Header';
import Carousel from 'react-native-snap-carousel';

import { styles } from './styles'
import { RFPercentage } from 'react-native-responsive-fontsize';
import TitleBar from '../../components/TitleBar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SCColors from '../../styles/SCColors';
import ScoreCard from '../../components/ScoreCard';
// @components
const windowWidth = Dimensions.get('window').width;
const flexW1 = windowWidth / 10
const DATA = [

  "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",

  "https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g",
  "https://i.picsum.photos/id/971/700/500.jpg?hmac=kNTldtPvd24NEOfvd39iwsRBun4As0dYChiWQuyCFo4",
  "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",

];
const Home = ({ navigation }) => {
  const carouselRef = useRef(null);



  const renderImage = ({ item }) => (
    <View style={{ backgroundColor: "red", borderRadius: RFPercentage(2), height: RFPercentage(22), width: flexW1 * 6.5, marginRight: flexW1 * 0.3, marginVertical: RFPercentage(1) }}>
      <Image source={{ uri: item }} style={styles.subCrousalBaner} />
    </View>
  );
  return (
    <>
      <Header />
      <View style={[styles.container, { backgroundColor: SCColors.primary }]}>
        <ScrollView style={{}}>
          {/* BANNERS */}
          <View style={styles.crousalContainer}>
            <Carousel
              ref={carouselRef}
              layout={'default'}
              scrollEnabled={false}
              loop={true}
              useNativeDriver
              autoplay={true}
              autoplayInterval={5000}
              data={DATA}
              renderItem={({ item }) => <Image source={{ uri: item }} style={styles.crousalBaner} />}
              sliderWidth={windowWidth}
              itemWidth={flexW1 * 8}
            />
          </View>
          {/* BANNERS */}
          {/* MATCH THIS WEEK */}
          <TitleBar title={`Match this Week`} seeAllEnable={true} />
          <View style={{ height: RFPercentage(26) }}>
            <FlatList
              horizontal
              contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
              data={DATA}
              renderItem={renderImage}
              keyExtractor={item => item.id}
            />
          </View>
          {/* MATCH THIS WEEK */}
          {/* LIVE SCORES */}
          <TitleBar title={`Live Scores`} seeAllEnable={true} />
          <View style={styles.liveScroreMainContainer}>
            <ScoreCard
              isLive={true}
              team1Logo={<Ionicons name='logo-firefox' color="white" size={RFPercentage(4)} />}
              team2Logo={<Ionicons name='logo-firefox' color="white" size={RFPercentage(4)} />}
              team1Name={`Leeds United`}
              team2Name={`Liverpool`}
              matchDuration={`83 mins`}
              team1Score={`0`}
              team2Score={2} />
            <ScoreCard
              isLive={true}
              team1Logo={<Ionicons name='logo-firefox' color="white" size={RFPercentage(4)} />}
              team2Logo={<Ionicons name='logo-firefox' color="white" size={RFPercentage(4)} />}
              team1Name={`Leeds United`}
              team2Name={`Liverpool`}
              matchDuration={`83 mins`}
              team1Score={`0`}
              team2Score={2} />
          </View>
          {/* LIVE SCORES */}
          {/* MATCH HIGHLIGHT */}
           <TitleBar title={`Match Highlight`} seeAllEnable={true} />
          <View style={{ height: RFPercentage(26) }}>
            <FlatList
              horizontal
              contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
              data={DATA}
              renderItem={renderImage}
              keyExtractor={item => item.id}
            />
          </View>
          {/* MATCH HIGHLIGHT */}
          {/* MATCH PREVIEW */}
           <TitleBar title={`Match Preview`} seeAllEnable={true} />
          <View style={{ height: RFPercentage(26) }}>
            <FlatList
              horizontal
              contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
              data={DATA}
              renderItem={renderImage}
              keyExtractor={item => item.id}
            />
          </View>



        </ScrollView>

      </View>
    </>
  );
};

export default Home;
