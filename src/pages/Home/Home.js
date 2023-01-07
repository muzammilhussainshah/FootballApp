// @app
import React, { useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';
import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import ScoreCard from '../../components/ScoreCard';
import CustomCarousel from '../../components/CustomCarousel';
import { styles } from './styles'

const windowWidth = Dimensions.get('window').width;
const flexW1 = windowWidth / 10

export const DUMMYBANNERS = [
  "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",
  "https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g",
  "https://i.picsum.photos/id/971/700/500.jpg?hmac=kNTldtPvd24NEOfvd39iwsRBun4As0dYChiWQuyCFo4",
  "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",
];

const Home = ({ navigation }) => {
  const carouselRef = useRef(null);

  return (
    <>
      <Header />
      <View style={[styles.container,]}>
        <ScrollView >
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
              data={DUMMYBANNERS}
              renderItem={({ item }) => <Image source={{ uri: item }} style={styles.crousalBaner} />}
              sliderWidth={windowWidth}
              itemWidth={flexW1 * 8}
            />
          </View>
          {/* BANNERS */}

          {/* MATCH THIS WEEK */}
          <TitleBar title={`Match this Week`} seeAllEnable={true} />

          <View style={{ height: RFPercentage(26) }}>
            <MatchPreviewCarousel />
          </View>
          {/* MATCH THIS WEEK */}

          {/* LIVE SCORES */}
          <TitleBar title={`Live Scores`} seeAllEnable={true} />

          <View style={styles.liveScroreMainContainer}>
            <ScoreCard
              isLive={true}
              team1Logo={
                <Ionicons
                  name='logo-firefox'
                  color="white"
                  size={RFPercentage(4)}
                />
              }
              team2Logo={
                <Ionicons
                  name='logo-firefox'
                  color="white"
                  size={RFPercentage(4)}
                />
              }
              team1Name={`Leeds United`}
              team2Name={`Liverpool`}
              matchDuration={`83 mins`}
              team1Score={`0`}
              team2Score={2} />
            <ScoreCard
              isLive={true}
              team1Logo={
                <Ionicons
                  name='logo-firefox'
                  color="white"
                  size={RFPercentage(4)}
                />}
              team2Logo={
                <Ionicons
                  name='logo-firefox'
                  color="white"
                  size={RFPercentage(4)}
                />}
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
            <MatchPreviewCarousel navigateTo={() => navigation?.navigate('VideoScreen')} />
          </View>
          {/* MATCH HIGHLIGHT */}

          {/* MATCH PREVIEW */}
          <TitleBar title={`Match Preview`} seeAllEnable={true} />
          <View style={{ height: RFPercentage(28) }}>
            <MatchPreviewCarousel />
          </View>
          {/* MATCH PREVIEW */}

        </ScrollView>
      </View>
    </>
  );
};

const MatchPreviewCarousel = ({ navigateTo }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
      data={DUMMYBANNERS}
      renderItem={(item) => <CustomCarousel item={item} navigateTo={() => navigateTo && navigateTo()} />}
      keyExtractor={item => item.id}
    />
  )
}
export default Home;
