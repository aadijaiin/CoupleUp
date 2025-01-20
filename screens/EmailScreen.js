import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import Fontisto from 'react-native-vector-icons/Fontisto';
const EmailScreen = () => {
  const [email, setEmail] = React.useState('');
  const navigation = useNavigation();
  function handleNext() {
    if (email.length == 0) {
      Snackbar.show({
        text: 'Please enter a valid email',
        backgroundColor: 'red',
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }
    navigation.navigate('Password',{
      email: email
    });
  }
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 15 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={{marginTop: 50, textAlign: 'center', color: 'gray'}}></Text>

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
            <Fontisto name="email" size={26} color="black" />
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
            Provide your email
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              fontWeight: 500,
              marginLeft: 2,
              paddingBottom: 10,
            }}>
            Email verification help us keep your account secure
          </Text>

          <TextInput
            onChangeText={email => setEmail(email)}
            autoFocus
            value={email}
            placeholder="Your email address"
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
            Note: You will be asked to verify your email
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

export default EmailScreen;

const styles = StyleSheet.create({});
