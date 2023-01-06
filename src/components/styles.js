import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../styles/SCColors';

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
  headerHeading: { flexDirection: 'row', alignItems: "center" },
  headerHeadingText1: {
    fontWeight: '700',
    fontSize: RFPercentage(3),
    color: 'white',
    fontStyle: 'italic'
  },
  headerHeadingText2: {
    fontWeight: '700',
    color: SCColors.white,
    fontSize: RFPercentage(3),
    fontStyle: 'italic'
  },
  iconsMargin: {
    marginRight: RFPercentage(2.5),
    fontWeight:"bold  "
  }
});