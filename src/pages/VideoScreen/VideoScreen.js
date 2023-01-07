// @app
import React, { } from 'react';
import {
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../components/Header';
import SCColors from '../../styles/SCColors';
import { styles } from './styles';
const VideoScreen = ({ navigation }) => {
    return (<>
        {/* <Header VideoScreen transparent /> */}
        <View style={{ flex: 1 }}>
            <View style={styles.VideoContainer}>
                <Image source={{ uri: "https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g" }}
                    style={{
                       height: "100%", width: "100%", position: 'absolute', zIndex: -1
                    }} />
                <View style={{ flexDirection: "row", width: "100%", justifyContent: 'space-between', padding: RFPercentage(1), }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.pop()}>
                        <Ionicons name={`chevron-back`} size={RFPercentage(4)} color={SCColors.white} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: '20%', height: RFPercentage(3), justifyContent: "space-around" }}>
                        <TouchableOpacity activeOpacity={0.8}  >

                            <MaterialCommunityIcons name={`cast`} size={RFPercentage(3)} color={SCColors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}  >
                            <MaterialIcons name={`logout`} size={RFPercentage(3)} style={{ transform: [{ rotate: "270deg" }], height: RFPercentage(3) }} color={SCColors.white} />
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity style={{ position: "absolute", alignSelf: "center", }} activeOpacity={0.8}  >
                    <AntDesign color={'rgba(245,245,245,0.7)'} name={`play`} size={RFPercentage(8)} />
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row', position: "absolute", bottom: RFPercentage(1), right: RFPercentage(1),
                    width: '20%', justifyContent: "space-around"
                }}>
                    <TouchableOpacity activeOpacity={0.8}  >
                        <AntDesign name='setting' size={RFPercentage(3.2)} color={SCColors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}  >
                        <Entypo name='resize-full-screen' size={RFPercentage(3)} color={SCColors.white} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.VideoBody}>

            </View>
        </View >
    </>
    );
};

export default VideoScreen;
