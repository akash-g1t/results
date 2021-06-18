/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './rootNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};


export default App;
