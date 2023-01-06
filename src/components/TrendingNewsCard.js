// @app
import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

// @components
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles'
import SCColors from '../styles/SCColors';
import moment from 'moment';

const TrendingNewsCard = ({ item, newDatalength }) => {
  return (
    <View style={styles.newsCartContainer(item.index == 0, item.index + 1 == newDatalength)}>
      <View style={styles.trendNewsProfileContainer}>
        <Image
          source={{ uri: item?.item?.profilePhoto }}
          style={styles.trendNewsProfile} />
      </View>
      <View style={styles.trendNewsBody}>
        <View style={{ width: '100%', }}>
          <Text style={styles.carouselFooterText}>{item.item.title}</Text>
        </View>
        <View style={styles.TrendingNewsCardFooterContainer}>
          <AntDesign
            name='hearto'
            size={RFPercentage(2)}
            color={SCColors.tabInactive} />
          <Text style={[styles.VSText, styles.trendNewsFooterText2]}>{item.item.likes}</Text>
          <Octicons
            name='comment'
            size={RFPercentage(2)}
            style={styles.trendNewsFooterText}
            color={SCColors.tabInactive} />
          <Text style={[styles.VSText, styles.trendNewsFooterText2]}>{item.item.comments}</Text>
          <Text style={[styles.VSText, styles.trendNewsFooterText]}>{moment(item.item.timeStamp).calendar()}</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendingNewsCard;
