import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

const NameScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const handleNext = () => {
    if(firstName.length === 0){
      Snackbar.show({
        text: 'Please enter a valid name',
        backgroundColor: 'red',
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
      })
      return;

    } navigation.navigate('Email');
  };
  return (
    
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 15 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={{marginTop: 50, textAlign: 'center', color: 'gray'}}>
        No Background Checks are Conducted
      </Text>

      <View style={{marginTop: 30, marginHorizontal: 20}}>
        {/* Row for icon and image */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          {/* Icon */}
          <View
            style={{
              width: 44,
              height: 44,
              borderWidth: 2,
              borderRadius: 22,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}>
            <IonIcons name="newspaper-outline" size={26} color="black" />
          </View>

          {/* Image */}
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>

        {/* Text */}
        <View style={{marginTop: 30}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              fontFamily: 'Geezapro-Bold',
            }}>
            What's your name?
          </Text>

          <TextInput
            value={firstName}
            autoFocus
            placeholder="First Name (required)"
            placeholderTextColor={'#BEBEBE'}
            style={{
              marginVertical: 10,
              marginTop: 20,
              width: 340,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 20,
              fontFamily: 'Geezapro-Bold',
              paddingBottom: 10,
              color: 'black',
            }}
            onChangeText={name => setFirstName(name)}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={'#BEBEBE'}
            style={{
              marginVertical: 10,
              marginTop: 20,
              width: 340,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 20,
              fontFamily: 'Geezapro-Bold',
              paddingBottom: 10,
              color: 'black',
            }}
          />
          <Text
            style={{
              color: 'gray',
              fontSize: 13.5,
              fontWeight: 500,
              marginLeft: 4,
            }}>
            Last name is optional
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.4}
          style={{marginTop: 40, marginLeft: 'auto'}}>
          <IonIcons
            name="chevron-forward-circle-outline"
            size={44}
            color="purple"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
