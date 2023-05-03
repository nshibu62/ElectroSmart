import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { ImageButton } from './loginButton';
import Colors from './loginColors'
import PushNotification from "react-native-push-notification";

GoogleSignin.configure({
  webClientId: '257217555270-94h596d7susj4qnpg8eienhjefieoilr.apps.googleusercontent.com',
});

const GoogleSignIn = ({ navigation }) => {

  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel(
        {
            channelId: "test-channel",
            channelName: "Test Channel"
        }
    )
  }

  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState();

  const googleSignIn = async () => {
    setLoading(true)
    const { idToken } = await GoogleSignin.signIn().catch((e) => {
      Alert.alert(e.message)
      setLoading(false)
    });
    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential)
      .then((res) => {
        setUserInfo(res);
        console.log('UserData', JSON.stringify(res))
      }).catch((e) => {
        Alert.alert(e.message)
      });
    const accessToken = await (await GoogleSignin.getTokens()).accessToken;
    // console.log(res);
    console.log(accessToken);
    setLoading(false)
  }


  return (
    <View style={styles.container}>
      <Text>

      </Text>

      <Text style={styles.title}>Welcome to ElectroSmart</Text>
      <ImageButton size={28}
        title={'Google Sign In'}
        image={require('../login/googleIcon.png')}
        onPress={() => {{googleSignIn}; navigation.navigate('Main', { screen: 'General' });
}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 16,
    paddingLeft: 20
  },
  title:{
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20
  },
  row: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  image: {
    width: 350,
    height: 100,
    marginVertical: 70,
  },
})

export default GoogleSignIn;