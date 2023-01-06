import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  crousalContainer: {
    height: RFPercentage(28),
    marginVertical: RFPercentage(2.5),
    alignItems: 'center'
  },
  subCrousalContainer: {
    backgroundColor: 'red', margin: 1,
    height: RFPercentage(23),
    marginVertical: RFPercentage(2.5),
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  subCrousalBaner: {
    height: RFPercentage(23),
    borderRadius: RFPercentage(3),
  },
  crousalBaner: {
    height: RFPercentage(28),
    borderRadius: RFPercentage(3),
  },
  liveScroreMainContainer: {
    margin: RFPercentage(2),
    height: RFPercentage(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  // liveScroreContainer: {
  //   height: RFPercentage(25),
  //   width: '48%',
  //   borderRadius: RFPercentage(2), overflow: 'hidden',
  //   backgroundColor: SCColors.tabInactive
  // },
  // ScoreHeaderContainer: { flex: 2, backgroundColor: SCColors.ScoreCart, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: RFPercentage(1) },
  // ScoreTeamLogoContainer: { flex: 2.5, backgroundColor: SCColors.ScoreCart, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: RFPercentage(1),   },
  // ScoreTeamNameContainer: { flex: 1.5, backgroundColor: SCColors.ScoreCart, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: RFPercentage(1),   },
  // ScoreContainer: { flex: 4, backgroundColor: SCColors.ScoreCart, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: RFPercentage(1),  },
  // liveIconContainer: { height: 13, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: SCColors.red },
  // liveText: { color: SCColors.white, fontSize: RFPercentage(1.2) },
  // VSText: { color: SCColors.white, fontSize: RFPercentage(1.8) },
  // GoalText: { color: SCColors.white, fontSize: RFPercentage(4),fontWeight:'700' },
  // TeamText: { color: SCColors.white, fontSize: RFPercentage(1.6) },
  // MinsText: { color: SCColors.white, fontSize: RFPercentage(1.5) },
});