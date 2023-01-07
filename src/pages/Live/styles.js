import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

export const styles = StyleSheet.create({

  caregoryBtnContainer: activeCategory => ({
    height: RFPercentage(5),
    marginVertical: RFPercentage(.5),
    marginRight: RFPercentage(2),
    paddingHorizontal: RFPercentage(2),
    borderRadius: RFPercentage(1),
    backgroundColor: activeCategory ? SCColors.white : SCColors.ScoreCart,
    justifyContent: "center",
    alignItems: 'center',
  }),
  caregoryBtnText: activeCategory => ({ color: activeCategory ? SCColors.black : SCColors.tabInactive }),
  teamIconsContainer: activeCategory => ({
    color: activeCategory ? SCColors.black : SCColors.tabInactive,
    backgroundColor: SCColors.ScoreCart,
    height: RFPercentage(8),
    width: RFPercentage(8),
    overflow: 'hidden',
    borderRadius: RFPercentage(4),
    marginLeft: RFPercentage(2),
    justifyContent: "center",
    alignItems: 'center'
  }),
  crousalBaner: {
    height: '80%',
    width: '80%',
    borderRadius: RFPercentage(3)
  },
  liveDatesContainer: {
    backgroundColor: SCColors.primary,
    paddingHorizontal: RFPercentage(2)
  },
  liveTeamsContainer: {
    backgroundColor: SCColors.primary,
    paddingVertical: RFPercentage(1)
  },
});