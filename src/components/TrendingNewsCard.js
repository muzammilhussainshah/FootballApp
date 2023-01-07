// @app
import React from 'react';
import { View } from 'react-native';

// @components
import { styles } from './styles'
import ExploreCart from './ExploreCart';
import MatchStats from './MatchStats';

const TrendingNewsCard = ({ item, newDatalength, matchStatus }) => {
  return (

    // CART 
    <View style={styles.newsCartContainer(item.index == 0, item.index + 1 == newDatalength,)}>
      {matchStatus ?
        <MatchStats item={item} /> :
        <ExploreCart item={item} />}
    </View>
    // CART 

  );
};

export default TrendingNewsCard;
