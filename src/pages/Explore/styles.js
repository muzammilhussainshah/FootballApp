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


  caregoryBtnText: activeCategory => ({
    color: activeCategory ? SCColors.black : SCColors.tabInactive
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
    // paddingBottom: noFooter ? 0 : 20,
    // paddingTop: Metrics.ratio(noFooter ? 0 : 5),
  }),
});