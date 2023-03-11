import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Text, StatusBar, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import Colors from './loginColors';
import { ImageButton } from './loginButton';
import GoogleSignIn from './GoogleSignIn';


GoogleSignin.configure({
  webClientId: '257217555270-94h596d7susj4qnpg8eienhjefieoilr.apps.googleusercontent.com',
});

const AuthPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
        <View style={styles.row}>
          <GoogleSignIn />
        </View>
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

export default AuthPage;