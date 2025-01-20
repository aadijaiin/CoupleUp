import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import React, { useRef } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DateOfBirthScreen = () => {
  const [dob, setDob] = React.useState({ day: '', month: '', year: '' });
  const navigation = useNavigation();
  
  const inputs = useRef([]);

  const handleNext = () => {
    navigation.navigate("Location")
  }

  const handleChangeDay = (day) => {
    setDob((prev) => ({ ...prev, day }));
    if (day.length === 2 && day < 32) {
      inputs.current[1]?.focus(); 
    }
  };

  const handleChangeMonth = (month) => {
    setDob((prev) => ({ ...prev, month }));
    if (month.length === 2) {
      inputs.current[2]?.focus(); 
    }
  };

  const handleChangeYear = (year) => {
    setDob((prev) => ({ ...prev, year }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <MaterialIcons name="calendar-today" size={26} color="black" />
        </View>

        {/* Image */}
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
          }}
        />
      </View>
      <Text style={styles.title}>What's your date of birth?</Text>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            placeholderTextColor="gray"
            autoFocus
            value={dob.day}
            onChangeText={handleChangeDay}
            ref={(el) => (inputs.current[0] = el)} 
          />
          <TextInput
            style={styles.input}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            placeholderTextColor="gray"
            value={dob.month}
            onChangeText={handleChangeMonth}
            ref={(el) => (inputs.current[1] = el)} 
          />
          <TextInput
            style={[styles.input, { width: 100 }]}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            placeholderTextColor="gray"
            value={dob.year}
            onChangeText={handleChangeYear}
            ref={(el) => (inputs.current[2] = el)} 
          />
        </View>

        <Text style={styles.note}>Note: You must be 18 years or older</Text>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.4}
          style={{ marginTop: 50, marginLeft: 'auto', marginRight: 20 }}
        >
          <IonIcons name="chevron-forward-circle-outline" size={44} color="purple" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 55 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 25,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderRadius: 22,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  image: {
    width: 100,
    height: 40,
  },
  content: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    paddingLeft: 25,
    fontWeight: 'bold',
    fontFamily: 'Geezapro-Bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-between',
  },
  input: {
    marginVertical: 10,
    marginTop: 20,
    width: 80,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 20,
    fontFamily: 'Geezapro-Bold',
    paddingBottom: 10,
    color: 'black',
  },
  note: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: -80,
    paddingTop: 15,
  },
});

export default DateOfBirthScreen;
