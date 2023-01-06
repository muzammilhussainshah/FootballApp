// @app
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles'
// @components

const TitleBar = ({ title, seeAllEnable }) => {
  return (
    <View style={[styles.TitleBarContainer]}>
      <Text style={styles.TitleBarTile}>{title}</Text>
      {seeAllEnable &&
        <TouchableOpacity activeOpacity={.8}>
          <Text style={styles.TitleBarBtn}>{`See All`}</Text>
        </TouchableOpacity>
      }

    </View>
  );
};

export default TitleBar;
