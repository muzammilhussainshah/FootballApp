// @app
import React, { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Carousel from 'react-native-snap-carousel';
import { DUMMYBANNERS } from '../Home/Home'
// @components
import Header from '../../components/Header';
import SCColors from '../../styles/SCColors';
import { styles } from './styles';
import CustomCarousel from '../../components/CustomCarousel';
import TitleBar from '../../components/TitleBar';

const EXPLORECATEGORY = ['All', 'Preview', 'Highlight', 'News Update', 'Standings']
const Explore = ({ navigation }) => {
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
          <View style={{ height: RFPercentage(29) }}>
            <MatchPreviewCarousel footer={true} />
          </View>
          {/* BANNERS */}




          {/* MATCH HIGHLIGHT */}
          <TitleBar title={`Match Highlight`} seeAllEnable={true} />

          <View style={{ height: RFPercentage(26) }}>
            <MatchPreviewCarousel />
          </View>
          {/* MATCH HIGHLIGHT */}
        </ScrollView>
      </View>
    </>
  );
};


const MatchPreviewCarousel = ({footer}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
      data={DUMMYBANNERS}
      renderItem={(item) => <CustomCarousel footer={footer==true?true:false} item={item} />}
      keyExtractor={item => item.id}
    />
  )
}
export default Explore;
