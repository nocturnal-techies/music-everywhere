import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Pages/Home.js'
import ProfileScreen from './Pages/Profile.js'
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});


App = createAppContainer(MainNavigator);

export default App
