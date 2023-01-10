/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/home/HomeScreen";
import SettingsScreen from "./screens/settings/SettingsScreen";
import {enableScreens} from "react-native-screens";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "./screens/splash/SplashScreen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

// Stack Navigator for Login and Sign up Screen
const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        title: 'Register', //Set Header Title
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
  </Stack.Navigator>
);

// Tab Navigator for the app screens
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
  </Tab.Navigator>
)
export const App = () => {
  enableScreens();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={AppNavigator}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
