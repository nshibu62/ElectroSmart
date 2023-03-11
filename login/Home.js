import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const Home = () => {

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
    <View>
      <Button
        loading={loading}
        title={'Google Sign-Out'}
        onPress={googleSignOut} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})