// @app
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RFPercentage } from 'react-native-responsive-fontsize';

import SCColors from '../../../styles/SCColors';
import { styles } from '../styles';

// THUMBNAIL HEADER
export const ThumbnailHeader = ({ navigation,backButton }) => {
    return (
        <View style={styles.thumbnailContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => backButton && navigation.pop()}>
                <Ionicons name={`chevron-back`} size={RFPercentage(4)} color={SCColors.white} />
            </TouchableOpacity>
            <View style={styles.thumbnailHeader}>
                <TouchableOpacity activeOpacity={0.8}  >
                    <MaterialCommunityIcons name={`cast`} size={RFPercentage(3)} color={SCColors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}  >
                    <MaterialIcons name={`logout`} size={RFPercentage(3)} style={styles.uploadIcon} color={SCColors.white} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
// THUMBNAIL HEADER

// SCOREBOEAD
export const ScoreBoard = () => {
    return (
        <View style={styles.scoreBoardContainer}>
            <View style={styles.scoreTeam1Container}>
                <Ionicons
                    name='logo-firefox'
                    color="white"
                    size={RFPercentage(5)}
                    style={{ marginVertical: RFPercentage(1) }}
                />
                <Text style={styles.caregoryBtnText(true)}>{`Man United`}</Text>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.GoalText}>{`4`}</Text>
                <Text style={styles.GoalText}>{`-`}</Text>
                <Text style={styles.GoalText}>{`1`}</Text>
            </View>
            <View style={styles.scoreTeam2Container}>
                <Ionicons
                    name='logo-firefox'
                    color="white"
                    size={RFPercentage(5)}
                    style={{ marginVertical: RFPercentage(1) }}
                />
                <Text style={styles.caregoryBtnText(true)}>{`Newcastle`}</Text>

            </View>
        </View>

    )
}
// SCOREBOEAD

// THUMBNAIL FOOTER
export const ThumbnailFooter = () => {
    return (
        <View style={styles.thumbnailFooter}>
            <TouchableOpacity activeOpacity={0.8}  >
                <AntDesign name='setting' size={RFPercentage(3.2)} color={SCColors.white} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}  >
                <Entypo name='resize-full-screen' size={RFPercentage(3)} color={SCColors.white} />
            </TouchableOpacity>
        </View>
    )
}
// THUMBNAIL FOOTER

// VIDEO PLAY BUTTON
export const PlayButton = () => {
    return (
        <TouchableOpacity style={styles.playBtn} activeOpacity={0.8}  >
            <AntDesign
                color={'rgba(245,245,245,0.7)'}
                name={`play`}
                size={RFPercentage(8)} />
        </TouchableOpacity>
    )
}
// VIDEO PLAY BUTTON

// THUMBNAIL PHOTO
export const Thumbnail = ({ photoURL }) => <Image source={{ uri: photoURL }} style={styles.thumbnailImage} />
// THUMBNAIL PHOTO

export const VideoTitle = () => {
    return (
        <View style={styles.videoTitle}>
            <Text style={styles.TitleBarTile}>{`Manchester United vs Newcastle`}</Text>
            <View>
                <Text style={styles.TeamText}>{`Premier League Gameweek 4 - Sep 11`}</Text>
                <Text style={styles.TeamText}>{`Old Trafford Stadium`}</Text>
            </View>
        </View>
    )
}

export const GoalScorerContainer = ({ position }) => {
    return (
        <View style={styles.goalScorerContainer(position)}>
            <Text style={styles.TeamText}>{`C.Ronaldo 45+2,62`}</Text>
            <View style={styles.breakColumn}></View>
            <Text style={styles.TeamText}>{`C.Ronaldo 45+2,62`}</Text>
        </View>
    )
}
export const VIDEOSECTION = ({ navigation, photoURL, backButton }) => {
    return (
        <View style={styles.VideoContainer}>
            <Thumbnail photoURL={photoURL} />
            <ThumbnailHeader backButton={backButton} navigation={navigation} />
            <PlayButton />
            <ThumbnailFooter />
        </View>
    )
}
export const VIDEOTABTIMELINECOMPONENT = () => {
    return (
        <View style={styles.videoTabComponent}>
            <ScoreBoard />
            <Text style={[styles.TitleBarTile, { marginVertical: RFPercentage(1.5) }]}>{`Goal Scrorer`}</Text>
            <GoalScorerContainer position={'top'} />
            <GoalScorerContainer position={'mid'} />
            <GoalScorerContainer position={'bottom'} />
        </View>
    )
}