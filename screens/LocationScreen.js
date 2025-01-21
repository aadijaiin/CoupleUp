import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// Updated Dark Mode Map Style
const darkModeStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#4f4f4f',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4f4f4f',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#5f5f5f',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#3e3e3e',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#546e7a',
      },
    ],
  },
];

const LocationScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState('Loading...');
  const handleNext = () => {
    navigation.navigate('Gender');
  };
  const fetchLocationFromGoogleAPI = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC6NiDxL-J8pGYQ5tuoOuZxfcrc5sn2qr8`,
        {
          method: 'POST',
        },
      );
      const data = await response.json();
      if (data.location) {
        const {lat, lng} = data.location;
        const initialRegion = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setRegion(initialRegion);
        fetchAddress(lat, lng);
      } else {
        console.log('No location data available');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC6NiDxL-J8pGYQ5tuoOuZxfcrc5sn2qr8`,
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
        let formattedAddress = '';
        for (let component of addressComponents) {
          if (component.types.includes('sublocality_level_1')) {
            formattedAddress += component.long_name + ', ';
          }
          if (component.types.includes('locality')) {
            formattedAddress += component.long_name + ', ';
          }
        }
        setLocation(formattedAddress.trim().slice(0, -1));
      } else {
        setLocation('Address not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  useEffect(() => {
    fetchLocationFromGoogleAPI();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 40,
            marginBottom: 20,
            gap: 12,
          }}>
          <IonIcons name="location-sharp" size={38} color="black" />
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            Where are you located?
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            height: 540,
            marginTop: 20,
            marginHorizontal: '5%',
            borderRadius: 30,
            overflow: 'hidden',
            backgroundColor: 'lightgray',
          }}>
          <MapView
            region={region}
            style={{flex: 1}}
            customMapStyle={darkModeStyle}>
            {region && (
              <Marker
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <IonIcons name="location-sharp" size={38} color="pink" />
                </View>
              </Marker>
            )}
          </MapView>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: '5%',
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        <IonIcons name="location-sharp" size={16} color="black" />

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Geezapro-Bold',
          }}>
          {location}
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleNext}
        activeOpacity={0.4}
        style={{marginTop: 30, marginLeft: 'auto', marginRight: 20}}>
        <IonIcons
          name="chevron-forward-circle-outline"
          size={44}
          color="purple"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
