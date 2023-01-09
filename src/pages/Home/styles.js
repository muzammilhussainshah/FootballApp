import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';
// const generateColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0');
//   return `#${randomColor}`;
// };
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCColors.primary
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
  homeName: (top, position, color) => ({
    position: "absolute", paddingVertical: RFPercentage(0.5)
    , fontSize: RFPercentage(2.5), fontWeight: '700'
    , paddingHorizontal: RFPercentage(1),
    top: top,
    alignSelf: position,
    backgroundColor: color,
    // borderRadius: RFPercentage(1)
  })
});