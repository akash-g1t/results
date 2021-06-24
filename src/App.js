/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react'
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './rootNavigation';
import { AsyncStorage } from 'react-native';

const App = () => {

  useEffect(async() => {
    var newUsers = JSON.stringify([])
    await AsyncStorage.setItem('users', newUsers)
    console.log('users removed')

  }, [])

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};


export default App;
