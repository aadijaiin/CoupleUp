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
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const email = route?.params?.email;
  function handleNext() {
    if (password.length == 0) {
      Snackbar.show({
        text: 'Please enter a valid Password',
        backgroundColor: 'red',
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }
    navigation.navigate('Otp', {email});
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 15 : 0,
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
            <MaterialIcons name="lock" size={26} color="black" />
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
            Please choose a password
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              fontWeight: 500,
              marginLeft: 2,
              paddingBottom: 10,
            }}>
            A strong one
          </Text>

          <TextInput
            onChangeText={pass => setPassword(pass)}
            autoFocus
            secureTextEntry={true}
            value={password}
            placeholder="Your Password"
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
              fontSize: 15,
              fontWeight: 500,
              marginLeft: 4,
              paddingTop: 5,
            }}>
            Note: Your details are safe with us
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

export default PasswordScreen;

const styles = StyleSheet.create({});
