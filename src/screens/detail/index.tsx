import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStack} from '../../routes/root';
import MapViewDirections from 'react-native-maps-directions';

type Props = NativeStackScreenProps<HomeStack, 'Screendetail'>;
const DetailDestinationScreen = ({route}: Props) => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBT4PUtUchDuXmOIASq9ouN479fniRMNhk';

  const [bookmark, setbookmark] = React.useState(false);
  const [mapss, setmapss] = React.useState(false);
  const handlebookmark = () => {
    setbookmark(!bookmark);
  };
  const handleMap = () => setmapss(!mapss);
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {
    latitude: route.params.params.long,
    longitude: route.params.params.lat,
  };
  const Maps = () => {
    return (
      <View style={Styles.containerMap}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={Styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsTraffic={true}
          showsIndoorLevelPicker={true}
          showsBuildings={true}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="hotpink"
            strokeWidth={8}
          />
        </MapView>
      </View>
    );
  };

  return (
    <View style={Styles.containerBody}>
      <ImageBackground
        source={route?.params?.params.imgs}
        imageStyle={{borderRadius: 20}}
        style={Styles.background}>
        <View style={Styles.contentBack}>
          <View>
            <TouchableOpacity>
              <Ionicons name="chevron-back-circle" size={35} color="#FF9900" />
            </TouchableOpacity>
          </View>
          <View style={Styles.columnRight}>
            <TouchableOpacity onPress={handlebookmark}>
              <Ionicons
                name={bookmark ? 'bookmark' : 'bookmark-outline'}
                size={28}
                color="#FF9900"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.container}>
          <View style={Styles.title}>
            <Ionicons name="location" size={28} color="#FF9900" />
            <Text style={Styles.TextDesc}>{route.params.params.title}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={Styles.containerItem}>
        <View style={{marginTop: 8, paddingLeft: 15, alignItems: 'flex-start'}}>
          <Text style={{fontSize: 27, color: 'gray'}}>Overview</Text>
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={handleMap}>
          <Text style={{color: 'gray'}}>Track</Text>
          <Ionicons name="locate" size={29} color="#FF9900" />
        </TouchableOpacity>
        <View>{mapss ? <View>{Maps()}</View> : <></>}</View>
        <View>
          <TouchableOpacity>
            <Text style={{color: 'gray'}}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailDestinationScreen;

const Styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  containerMap: {
    height: 450,
    width: '100%',
  },
  containerBody: {
    padding: 15,
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: '20%',
    flexDirection: 'column',
  },
  title: {
    position: 'absolute',
    bottom: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextDesc: {
    color: 'white',
    fontSize: 27,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'gray',
  },
  columnRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 15,
  },
  background: {
    width: '100%',
    height: 350,
  },
  containerItem: {
    height: 300,
  },
  Item: {
    backgroundColor: '#FF9900',
    width: 280,
    height: 40,
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
});
