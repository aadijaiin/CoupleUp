import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const inputs = useRef([]); // Reference for all TextInput components
  const handleResendOtp = () => {
    //pass;
  };
  const handleChangeText = (data, index) => {
    const newOtp = [...otp];
    newOtp[index] = data;
    setOtp(newOtp);

    // Focus next input automatically if not the last input and data is entered
    if (index < 5 && data) {
      inputs.current[index + 1]?.focus();
    }
    if(index === 5 && data){
      console.log('Submit Otp')
      navigation.navigate('Birth')
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      
      // If the current input is empty, focus on the previous input and clear it
      if (otp[index] === '') {
        if (index > 0) {
          inputs.current[index - 1]?.focus();
          newOtp[index - 1] = '';  // Clear the previous index
        }
      } else {
        newOtp[index] = '';  // Clear the current input
      }

      setOtp(newOtp);
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 55 : 0,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}
    >
      <View>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          Verification Code
        </Text>
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            color: 'gray',
            fontSize: 16,
          }}
        >
          Enter the 6-digit OTP sent to your email
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          marginTop: 50,
          justifyContent: 'space-between',
        }}
      >
        {otp.map((data, index) => (
          <TextInput
            ref={(el) => (inputs.current[index] = el)} // Attach ref to each input
            style={styles.input}
            key={index}
            value={data}
            keyboardType="numeric"
            maxLength={1}
            autoFocus={index === 0 ? true : false}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)} // Handle backspace
          />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={{
          color: '#007AFF',
          marginTop: 40,
          fontSize: 18,
          onPress: {handleResendOtp},
        }}>
          Resend OTP
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
});

export default OtpScreen;
