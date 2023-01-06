// @app
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../styles/SCColors';

// @components
import { styles } from './styles'

const CustomCarousel = ({ item, footer }) => {
  console.log(item, 'footerfooter', footer)
  return (
      <>
    <View style={styles.carouselContainer(footer?true:false)}>
      <Image source={{ uri: item.item }} style={styles.subCrousalBaner(footer?true:false)} />
      {footer&&
      <View style={{height:RFPercentage(7),backgroundColor:SCColors.ScoreCart,borderBottomRightRadius:RFPercentage(2),borderBottomLeftRadius:RFPercentage(2),width:"100%"}}></View>}
    </View>
      </>
  )
};

export default CustomCarousel;
