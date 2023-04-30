import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Login from './login/GoogleSignIn';
import Home from './login/Home';
import General from './AppGeneralUsage';
import Appliance from './ApplianceUsage';
import Tips from './AppUsageTips';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

GoogleSignin.configure({
  webClientId: '257217555270-94h596d7susj4qnpg8eienhjefieoilr.apps.googleusercontent.com',
});

const generalName = "General";
const applianceName = "Appliance";
const tipsName = "Tips";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
        <Tab.Navigator
        initialRouteName={generalName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn == generalName) {
                iconName = 'chart-line';
            }
            else if (rn === applianceName) {
              iconName = focused ? 'power-plug' : 'power-plug-outline';

            } else if (rn === tipsName) {
              iconName = focused ? 'tooltip-check' : 'tooltip-check-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 6, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={generalName} component={General} />
        <Tab.Screen name={applianceName} component={Appliance} />
        <Tab.Screen name={tipsName} component={Tips} />
      </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={MyTabs} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Account' }}/>
          </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;