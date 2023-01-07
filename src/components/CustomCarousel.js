// @app
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// @components
import { styles } from './styles'

const CustomCarousel = (props) => {
  const { item, footer, footerText, navigateTo } = props
  console.log(props, 'propsprops')
  return (
    <>
      <TouchableOpacity
        onPress={() => navigateTo && navigateTo()}
        activeOpacity={.8}
        style={styles.carouselContainer(footer ? true : false)}>
        <Image
          source={{ uri: item.item }}
          style={styles.subCrousalBaner(footer ? true : false)} />
        {footer &&
          <View style={styles.carouselFooterContainer}>
            <Text style={styles.carouselFooterText}>{footerText}</Text>
          </View>}

      </TouchableOpacity>
    </>
  )
};

export default CustomCarousel;
