import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCColors.primary
  },
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
  bannerContainer: { height: RFPercentage(29), marginVertical: RFPercentage(1), marginBottom: RFPercentage(2) },
});