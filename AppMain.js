import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './login/GoogleSignIn';
import Home from './login/Home';
import General from './AppGeneralUsage';
import Appliance from './ApplianceUsage';
import Tips from './AppUsageTips';

GoogleSignin.configure({
  webClientId: '257217555270-94h596d7susj4qnpg8eienhjefieoilr.apps.googleusercontent.com',
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name="General" component={General} options={{ title: 'General Usage' }}/>
        <Stack.Screen name="Appliance" component={Appliance} options={{ title: 'Appliance Usage' }}/>
        <Stack.Screen name="Tips" component={Tips} options={{ title: 'Usage Tips' }}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Account' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;