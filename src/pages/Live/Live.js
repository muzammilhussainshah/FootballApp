// @app
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import Header from '../../components/Header';
import SCColors from '../../styles/SCColors';
import { styles } from './styles';
import {
  DUMMYBANNERS,
  LIVEDATES
} from './DummyData';

const Live = () => {
  // STATE
  const [activeCategory, setActiveCategory] = useState('Today, 12 Sep')
  // STATE

  // LIVE DATES BUTTONS COMPONENT
  const categoryButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveCategory(item)}
        style={styles.caregoryBtnContainer(activeCategory == item ? true : false)}>
        <Text style={styles.caregoryBtnText(activeCategory == item ? true : false)}>{item}</Text>
      </TouchableOpacity>
    )
  }
  // LIVE DATES BUTTONS COMPONENT

  // LIVE TEAMS COMPONENTS
  const teamIcons = (item) => {
    return (
      <TouchableOpacity
        style={styles.teamIconsContainer(activeCategory == item ? true : false)}>
        <Image source={{ uri: item }} style={styles.crousalBaner} />
      </TouchableOpacity>
    )
  }
  // LIVE TEAMS COMPONENTS

  return (
    <>
      {/* HEADER */}
      < Header />
      {/* HEADER */}

      {/* LIVE DATES BUTTONS */}
      <View style={{ height: RFPercentage(6.5) }}>
        <FlatList
          data={LIVEDATES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.liveDatesContainer}
          renderItem={({ item }) => categoryButton(item)}
          keyExtractor={item => item.id}
        />
      </View>
      {/* LIVE DATES BUTTONS */}

      {/* LIVE TEAMS */}
      <FlatList
        data={DUMMYBANNERS}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.liveTeamsContainer}
        renderItem={({ item }) => teamIcons(item)}
        keyExtractor={item => item.id}
      />
      {/* LIVE TEAMS */}

    </>
  );
};

export default Live;
