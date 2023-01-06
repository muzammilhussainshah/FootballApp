// @app
import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import Header from '../../components/Header';
import SCColors from '../../styles/SCColors';
import CustomCarousel from '../../components/CustomCarousel';
import TitleBar from '../../components/TitleBar';
import TrendingNewsCard from '../../components/TrendingNewsCard';
import { DUMMYBANNERS } from '../Home/Home'
import { styles } from './styles';
import {
  NEWSDATA,
  EXPLORECATEGORY
} from './DummyData';

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveCategory(item)}
        style={styles.caregoryBtnContainer(activeCategory == item ? true : false)}>
        <Text style={styles.caregoryBtnText(activeCategory == item ? true : false)}>{item}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* HEADER */}

      {/* CATEGORY BUTTONS */}
      <View style={{ height: RFPercentage(6.5) }}>
        <FlatList
          data={EXPLORECATEGORY}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ backgroundColor: SCColors.primary, paddingHorizontal: RFPercentage(2) }}
          renderItem={({ item }) => categoryButton(item)}
          keyExtractor={item => item.id}
        />
      </View>
      {/* CATEGORY BUTTONS */}

      <View style={[styles.container,]}>
        <ScrollView >

          {/* BANNERS */}
          <View style={{ height: RFPercentage(29), marginVertical: RFPercentage(1), marginBottom: RFPercentage(2) }}>
            <MatchPreviewCarousel
              footer={true}
              footerText={`Player, Manager & Goal of the Month Premier League Awards?`} />
          </View>
          {/* BANNERS */}

          {/* MATCH HIGHLIGHT */}
          <TitleBar title={`Match Highlight`} seeAllEnable={true} />

          <View style={{ height: RFPercentage(26) }}>
            <MatchPreviewCarousel />
          </View>
          {/* MATCH HIGHLIGHT */}

          {/* TRENDING NEWS */}
          <TitleBar title={`Trending News`} seeAllEnable={true} />
          <FlatList
            data={NEWSDATA}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: RFPercentage(2) }}
            renderItem={(props) => <TrendingNewsCard newDatalength={NEWSDATA.length} item={props} />}
            keyExtractor={item => item.id}
          />
          {/* TRENDING NEWS */}

        </ScrollView>
      </View>
    </>
  );
};

const MatchPreviewCarousel = ({ footer, footerText }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
      data={DUMMYBANNERS}
      renderItem={(item) => <CustomCarousel footer={footer == true ? true : false} footerText={footerText} item={item} />}
      keyExtractor={item => item.id}
    />
  )
}
export default Explore;
