import { Pressable, SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import NameScreen from './NameScreen'
import { useNavigation } from '@react-navigation/native'

const BasicInfo = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{paddingTop :35 ,flex: 1,backgroundColor: 'white'}}>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
        
        <View>
            <Text
            style={{
                fontSize: 32,
                fontWeight: 'bold',
                fontFamily: 'Geezapro-Bold',
                marginLeft: 20,
                marginTop: 10,

            }}>
                You're one of a kind.
            </Text >
            <Text
            style={{
                fontSize: 32,
                fontWeight: 'bold',
                fontFamily: 'Geezapro-Bold',
                marginLeft: 20,
                marginTop: 10,

            }}
            >
                Your profile should be too.
            </Text >
        </View>

        <View>
        <LottieView source={require('../assets/love.json')}
        style={{height: 260, width: 300, alignSelf: "center" , marginTop: 40,justifyContent: 'center'}}
        autoPlay loop={true}
        speed={0.7}
        
        
        />
        
        </View>

        <Pressable style={{marginTop: 'auto',backgroundColor:'#900c3f',padding: 15}}
        onPress={() => navigation.navigate("Name")}
        >
            <Text
            style={{textAlign: 'center',color: 'white',fontSize: 18,fontWeight: 600}}
            >
                Enter Basic Info
            </Text>
        </Pressable>

    </SafeAreaView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({})