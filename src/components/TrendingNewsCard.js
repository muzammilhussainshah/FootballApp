// @app
import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

// @components
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles'
import SCColors from '../styles/SCColors';
import moment from 'moment';

const TrendingNewsCard = ({ item, newDatalength, matchStatus }) => {
  const ExploreCart = () => {
    return (
      <>
        <View style={styles.trendNewsProfileContainer}>
          <Image
            source={{ uri: item?.item?.profilePhoto }}
            style={styles.trendNewsProfile} />
        </View>
        <View style={styles.trendNewsBody}>
          <View style={{ width: '100%', }}>
            <Text style={styles.carouselFooterText}>{item?.item?.title}</Text>
          </View>
          <View style={styles.TrendingNewsCardFooterContainer}>
            <AntDesign
              name='hearto'
              size={RFPercentage(2)}
              color={SCColors.tabInactive} />
            <Text style={[styles.VSText, styles.trendNewsFooterText2]}>{item?.item?.likes}</Text>
            <Octicons
              name='comment'
              size={RFPercentage(2)}
              style={styles.trendNewsFooterText}
              color={SCColors.tabInactive} />
            <Text style={[styles.VSText, styles.trendNewsFooterText2]}>{item?.item?.comments}</Text>
            <Text style={[styles.VSText, styles.trendNewsFooterText]}>{moment(item?.item?.timeStamp).calendar()}</Text>
          </View>
        </View>
      </>
    )
  }
  const teamStats = (item, whichTeam) => {
    return (
      <View style={styles.team1Container}>
        <View style={styles.team1ProfileContainer}>
          <Image
            source={{ uri: whichTeam == 1 ? item?.logo1 : item?.logo2 }}
            style={styles.teamLogo} />
        </View>
        <Text style={styles.caregoryBtnText}>{whichTeam == 1 ? item?.name1 : item?.name2}</Text>
      </View>
    )
  }
  const MatchStatus = () => {
    console.log(item, 'itemitemitem')
    return (
      <>
        <View style={styles.matchStatusSubContainer}>
          {teamStats(item.item, 1)}
          {teamStats(item.item, 2)}
          {/* <View style={{ flex: 1, alignItems: "center", flexDirection: 'row' }}>
            <View style={{ width: RFPercentage(6), }}>
              <Image source={{ uri: item.item?.logo2 }} style={{ height: 20, width: 20 }} />
            </View>
            <Text style={styles.caregoryBtnText}>{item.item?.name1}</Text>
          </View> */}
        </View>
        <View style={styles.matchStatusSubContainer}>
          {item.item.isLive ?
            <View style={styles.liveIconContainer('medium', 'right')}>
              <Text style={styles.liveText('medium')}>{`LIVE`}</Text>
            </View>
            : item.item.matchTime ?
              <View style={styles.liveMatchTimeContainer}>
                <Text style={styles.liveText('medium')}>{moment(item.item?.matchTime).format('hh:mm A')}</Text>
                <View style={styles.bellIconContainer}>
                  <Fontisto
                    name='bell'
                    size={RFPercentage(1.8)}
                    color={SCColors.white}
                  />
                </View>
              </View>

              : null
          }
        </View>
      </>
    )
  }
  return (
    <View style={styles.newsCartContainer(item.index == 0, item.index + 1 == newDatalength, matchStatus)}>
      {matchStatus ?

        <MatchStatus /> : <ExploreCart />
      }

    </View>
  );
};

export default TrendingNewsCard;
