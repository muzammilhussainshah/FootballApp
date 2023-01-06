// @app
import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

// @components
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'

import { styles } from './styles'
import SCColors from '../styles/SCColors';

const TrendingNewsCard = ({ item, newDatalength }) => {
  console.log(item, 'itemitemitemitem', newDatalength)
  return (
    <View style={styles.newsCartContainer(item.index == 0, item.index + 1 == newDatalength)}>
      <View style={styles.trendNewsProfileContainer}>
        <Image source={{ uri: item?.item?.profilePhoto }} style={styles.trendNewsProfile} />
      </View>
      <View style={styles.trendNewsBody}>
        <View style={{ width: '100%', backgroundColor: 'red' }}>
          <Text style={styles.carouselFooterText}>{item.item.title}</Text>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: "center" }}>
          <AntDesign name='hearto' size={RFPercentage(2)} color={SCColors.tabInactive} />
          <Text style={[styles.VSText, { marginLeft: RFPercentage(1) }]}>{item.item.likes}</Text>
          <Octicons name='comment' size={RFPercentage(2)} style={styles.trendNewsFooterText} color={SCColors.tabInactive} />
          <Text style={[styles.VSText, { marginLeft: RFPercentage(1) }]}>{item.item.comments}</Text>
          <Text style={[styles.VSText, styles.trendNewsFooterText]}>{item.item.timeStamp.toLocaleDateString("en-US",)}</Text>

        </View>

      </View>
    </View>
  );
};

export default TrendingNewsCard;
