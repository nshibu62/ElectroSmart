import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, TextInput, ScrollView, Alert, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import  { ImageButton } from './loginButton';
import Colors from './loginColors'
import PushNotification from "react-native-push-notification";

GoogleSignin.configure({
  webClientId: '257217555270-94h596d7susj4qnpg8eienhjefieoilr.apps.googleusercontent.com',
});

const Home = ({ navigation }) => {

  let [input1, setInputData1] = useState("");
  let [input2, setInputData2] = useState("");
  let [input3, setInputData3] = useState("");
  let [input4, setInputData4] = useState("");
  let [input5, setInputData5] = useState("");
  let [input6, setInputData6] = useState("");
  let [time, setTime] = useState("");

  let [flag, setFlag] = useState(false);

  var arr = ["Toaster", "Coffee Maker", "Charger", "Game Console", "Monitor", "Speaker"];

  const [loading, setLoading] = useState(false)

  // notification is sent (send time displayed in emulator notification settings) but cannot view on status bar, so for demo, alert is used instead

  const handleNotification = (input) => {

    PushNotification.localNotification({
      channelId: "test-channel",
      title: "Standby Appliance",
      message: "Disconnect" + input + "after use",
    });

    // scheduled notifications requires extra permissions from android os (newer versions)

   /*
    PushNotification.localNotificationSchedule({
      channelId: "test-channel",
      title: "Standby Appliance",
      message: "Disconnect" + input + "after use",
      date: new Date(Date.now() + 5 * 1000), // for demo, scheduled to send after 5 seconds
      allowWhileIdle: true,
  });
  */
  }

  const notificationAlert = (input) => {
    Alert.alert('Standby Appliance', 'Disconnect ' + input + ' after use')
  }

  const googleSignOut = async () => {
    setLoading(true)
    auth().signOut().then(async () => {
      await GoogleSignin.signOut();
      await GoogleSignin.revokeAccess();
      console.log('User sign-out successfully!');
    }).catch(e => Alert.alert('Error', e.message));
    setLoading(false)
  }

  return (

    <View style={styles.container}>
      <ScrollView>
      <Text>

          </Text>
      <Text style={styles.title}> Standby Appliance Notifications </Text>
       <Text>

         </Text>

      <Text style={styles.text2}> {arr[0]} </Text>

     <TextInput
      placeholder="Enter Y for Yes (skip if not used)"
      onChangeText={item => setInputData1(item.toString()) }
      style={styles.textInput} />

     <Button onPress={() => {notificationAlert(arr[0])}}
         title={'save'} />


       <Text>

         </Text>

         <Text style={styles.text2}> {arr[1]} </Text>

<TextInput
 placeholder="Enter Y for Yes (skip if not used)"
 onChangeText={item => setInputData2(item.toString()) }
 style={styles.textInput} />

<Button onPress={() => {notificationAlert(arr[1])}}
         title={'save'} />


  <Text>

    </Text>

    <Text style={styles.text2}> {arr[2]} </Text>

<TextInput
 placeholder="Enter Y for Yes (skip if not used)"
 onChangeText={item => setInputData3(item.toString()) }
 style={styles.textInput} />

<Button onPress={() => {notificationAlert(arr[2])}}
         title={'save'} />


  <Text>

    </Text>

    <Text style={styles.text2}> {arr[3]} </Text>

<TextInput
 placeholder="Enter Y for Yes (skip if not used)"
 onChangeText={item => setInputData4(item.toString()) }
 style={styles.textInput} />

<Button onPress={() => {notificationAlert(arr[3])}}
         title={'save'} />


  <Text>

    </Text>

    <Text style={styles.text2}> {arr[4]} </Text>

<TextInput
 placeholder="Enter Y for Yes (skip if not used)"
 onChangeText={item => setInputData5(item.toString()) }
 style={styles.textInput} />

<Button onPress={() => {notificationAlert(arr[4])}}
         title={'save'} />


  <Text>

    </Text>

    <Text style={styles.text2}> {arr[5]} </Text>

<TextInput
 placeholder="Enter Y for Yes (skip if not used)"
 onChangeText={item => setInputData6(item.toString()) }
 style={styles.textInput} />

<Button onPress={() => {notificationAlert(arr[5])}}
         title={'save'} />


  <Text>

    </Text>

    <Text style={styles.text2}> Notification Time  </Text>

<TextInput
 placeholder="Enter 8 (8 PM), 9 (9 PM), or 10 (10 PM)"
 onChangeText={item => setTime(item.toString()) }
 style={styles.textInput} />

<Text>

</Text>

<Button onPress={() => setFlag(true)} // flag is set to true once graph arrays are updated from the update function
         title={'save'} />

<Text>

</Text>


  <Text>

    </Text>

    <ImageButton size={40}
      title={'Google Sign Out'}
      image={require('../login/googleIcon.png')}
      onPress={googleSignOut} />

      <Text>

      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.text}>Finish</Text>
        </TouchableOpacity>

        <Text>

      </Text>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  textInput:{
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    height: 44,
    width: '88%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
},
  text: {
    fontSize: 20,
    textAlign: 'right',
    paddingRight: 40
  },
  text2:{
    fontSize: 25,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 20,
    paddingBottom: 20
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

export default Home