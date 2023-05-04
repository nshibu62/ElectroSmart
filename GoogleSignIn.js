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

      <Text style={styles.electrosmart}>ELECTROSMART</Text>
      <Image
        style={{
          left: 30,
          top: 50,
        }}
        source={require('../login/lightbulb.png')} />
        <TouchableOpacity
            onPress={() => {{googleSignIn}; navigation.navigate('Main', { screen: 'General' })}}>
            <Image
                style={{
                  top: 10,
                  alignItems: 'center',
                  left: 55,
                  height: 350,
                  width: 300,
                }}
                source={require('../login/signin-button.png')}
                resizeMode="contain"
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ('#46638F'),
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
  electrosmart: {
    width: 350,
    height: 60,
    left: 30,
    top: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 49,
    color: ('#FFFFFF'),
  },
})

export default GoogleSignIn;