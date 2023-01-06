// @app
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../styles/SCColors';

// @components
import { styles } from './styles'

const CustomCarousel = ({ item, footer, footerText }) => {
  console.log(item, 'footerfooter', footer, footerText)
  return (
    <>
      <View style={styles.carouselContainer(footer ? true : false)}>
        <Image
          source={{ uri: item.item }}
          style={styles.subCrousalBaner(footer ? true : false)} />
        {footer &&
          <View style={styles.carouselFooterContainer}>
            <Text style={styles.carouselFooterText}>{footerText}</Text>
          </View>}

      </View>
    </>
  )
};

export default CustomCarousel;
