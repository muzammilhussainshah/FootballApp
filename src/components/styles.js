import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../styles/SCColors';

const windowWidth = Dimensions.get('window').width;
const flexW1 = windowWidth / 10
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: RFPercentage(7),
    backgroundColor: SCColors.primary,
    width: "100%",
    paddingHorizontal: RFPercentage(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerHeading: {
    flexDirection: 'row',
    alignItems: "center"
  },
  headerHeadingText1: {
    fontWeight: '700',
    fontSize: RFPercentage(3),
    color: 'white',
    fontStyle: 'italic'
  },
  TitleBarTile: {
    fontWeight: '700',
    fontSize: RFPercentage(2.6),
    color: 'white',
  },
  headerHeadingText2: {
    fontWeight: '700',
    color: SCColors.white,
    fontSize: RFPercentage(3),
    fontStyle: 'italic'
  },
  iconsMargin: {
    marginRight: RFPercentage(2.5),
    fontWeight: "bold"
  },
  TitleBarContainer: {
    height: RFPercentage(5),
    backgroundColor: SCColors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: RFPercentage(2),
  },
  TitleBarBtn: {
    fontWeight: '700',
    color: SCColors.tabInactive,
    fontSize: RFPercentage(1.9),
  },
  liveScroreContainer: {
    height: RFPercentage(25),
    width: '48%',
    borderRadius: RFPercentage(2), overflow: 'hidden',
    backgroundColor: SCColors.tabInactive
  },
  ScoreHeaderContainer: {
    flex: 2,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(2)
  },
  ScoreTeamLogoContainer: {
    flex: 2.5,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },
  ScoreTeamNameContainer: {
    flex: 1.5,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },
  ScoreContainer: {
    flex: 4,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },
  liveIconContainer: {
    height: 13,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: SCColors.red
  },
  liveText: {
    color: SCColors.white,
    fontSize: RFPercentage(1.2)
  },
  VSText: {
    color: SCColors.white,
    fontSize: RFPercentage(1.8)
  },
  GoalText: {
    color: SCColors.white,
    fontSize: RFPercentage(4),
    fontWeight: '700'
  },
  TeamText: {
    color: SCColors.white,
    fontSize: RFPercentage(1.6)
  },
  MinsText: {
    color: SCColors.white,
    fontSize: RFPercentage(1.5)
  },
  subCrousalBaner: footer => ({
    height: footer ? RFPercentage(21) : RFPercentage(23),
    borderRadius: RFPercentage(2),
    borderBottomRightRadius: footer ? 0 : RFPercentage(2), borderBottomLeftRadius: footer ? 0 : RFPercentage(2)
  }),
  carouselContainer: footer => ({

    borderRadius: RFPercentage(2),
    borderBottomRightRadius: footer ? 0 : RFPercentage(2), borderBottomLeftRadius: footer ? 0 : RFPercentage(2),
    height: footer ? RFPercentage(29) : RFPercentage(22),
    width: flexW1 * 6.5,
    marginRight: flexW1 * 0.3,
    marginVertical: RFPercentage(1)
  }),
  carouselFooterContainer: {
    height: RFPercentage(7), backgroundColor: SCColors.ScoreCart, borderBottomRightRadius: RFPercentage(2), borderBottomLeftRadius: RFPercentage(2), width: "100%", justifyContent: "center", alignItems: 'center'
  },
  carouselFooterText: {
    color: SCColors.white,
    width: '90%',
    fontSize: RFPercentage(1.8)
  },
  newsCartContainer: (topCurve, bottomCurve) => ({
    height: RFPercentage(12),
    width: '100%',
    // width:RFPercentage(15),
    margin: 1,
    backgroundColor: 'red',
    borderBottomLeftRadius: bottomCurve ? RFPercentage(2) : 0,
    borderBottomRightRadius: bottomCurve ? RFPercentage(2) : 0,
    borderTopRightRadius: topCurve ? RFPercentage(2) : 0,
    borderTopLeftRadius: topCurve ? RFPercentage(2) : 0,
    overflow: 'hidden',
    flexDirection: 'row', justifyContent: 'center', alignItems: "center",

  }),
  trendNewsProfileContainer: {
    height: "100%", width: '23%', backgroundColor: 'blue', justifyContent: 'center', alignItems: "center",
  },
  trendNewsBody: {
    height: "100%", width: '77%', backgroundColor: 'green', justifyContent: 'space-evenly', alignItems: "center", paddingHorizontal: RFPercentage(2)
  },
  trendNewsProfile: { height: '85%', width: '85%', borderRadius: RFPercentage(2) },
  trendNewsFooterText: { marginLeft: RFPercentage(2), color: SCColors.tabInactive }
});