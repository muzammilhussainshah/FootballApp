// @app
import React from 'react';
import { Image, Text, View } from 'react-native';

// @components
import { styles } from './styles'

const CustomCarousel = ({ item }) => {
  return (
    <View style={styles.carouselContainer}>
      <Image source={{ uri: item.item }} style={styles.subCrousalBaner} />
    </View>
  )
};

export default CustomCarousel;
