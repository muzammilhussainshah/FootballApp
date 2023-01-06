// @app
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import Header from '../../components/Header';
import SCColors from '../../styles/SCColors';
import { styles } from './styles';

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
      <Header />
      <FlatList
        data={EXPLORECATEGORY}
        horizontal
        contentContainerStyle={{ backgroundColor: SCColors.primary, paddingHorizontal: RFPercentage(2) }}
        renderItem={({ item }) => categoryButton(item)}
        keyExtractor={item => item.id}
      />
    </>
  );
};
export default Explore;
