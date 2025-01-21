import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PasswordScreen = () => {
  const [homeTown, setHomeTown] = React.useState('');
  const navigation = useNavigation();
  const route = useRoute();
  // const email = route?.params?.email;
  function handleNext() {
    
    navigation.navigate('Photos');
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 55 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={{marginTop: 30, marginHorizontal: 20}}>
        {/* Row for icon and image */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 0,
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
            <IonIcons name="earth-outline" size={26} color="black" />
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
            Where's your Home Town?
          </Text>
          

          <TextInput
            onChangeText={homeTown => setHomeTown(homeTown)}
            autoFocus
            secureTextEntry={false}
            value={homeTown}
            placeholder="Home Town"
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

export default PasswordScreen;

const styles = StyleSheet.create({});
