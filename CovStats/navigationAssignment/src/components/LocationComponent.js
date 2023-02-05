import React, {useState} from 'react';
import {Text, View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
const LocationComponent = () => {
  const [coordinate, setCoordinate] = useState({
    latitude: 28.641745,
    longitude: 77.289877,
  });

  const regionChange = region => {
    setCoordinate(region);
  };

  return (
    <View>
      <MapView
        showsUserLocation={true}
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={regionChange}>
        <Marker
          coordinate={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default LocationComponent;
