// @app
import React, { useRef } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Header from '../../components/Header';
import Carousel from 'react-native-snap-carousel';

import { styles } from './styles'
import { RFPercentage } from 'react-native-responsive-fontsize';
// @components
const windowWidth = Dimensions.get('window').width;
const flexW1 = windowWidth / 10
const DATA = [

  "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",

  "https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g",
  "https://i.picsum.photos/id/971/700/500.jpg?hmac=kNTldtPvd24NEOfvd39iwsRBun4As0dYChiWQuyCFo4",

];
const Home = ({ navigation }) => {
  const carouselRef = useRef(null);
  return (
    <>
      <Header />
      <Carousel
        ref={carouselRef}
        // useScrollView={true}

        layout={'default'}
        loop={true}

        // firstItem={ 1}

        // loopClonesPerSide={ 1}
        useNativeDriver
        autoplay={true}
        data={DATA}
        contentContainerCustomStyle={{ height: RFPercentage(26), marginVertical: RFPercentage(1), alignItems: 'center' }}
        // style={{backgroundColor:'red'}}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }}
              style={{ height: RFPercentage(28), borderRadius: RFPercentage(3), }} />
            // <View style={{ height: RFPercentage(32), backgroundColor: "red", }}></View>
          )
        }}
        sliderWidth={windowWidth}
        itemWidth={flexW1 * 8}
      />
    </>
    // <View style={[styles.container, { backgroundColor:'red' }]}>
    //   <ScrollView>

    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>

    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //     <Text>Home</Text>
    //   </ScrollView>

    // </View>
  );
};

export default Home;
