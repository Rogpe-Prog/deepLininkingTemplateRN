import React from 'react'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

const Stack = createStackNavigator();

const App = () => {

  const deepLinking ={
    prefixes: ['http://navigs.com', 'navigs://'],
    config:{
      Home:'HomeScreen',
      DetailScreen:{
        path:'DetailScreen/:itemId',
        params: {
          itemId: null,
        }
      }
    }
  }

  return (
    <NavigationContainer linking={deepLinking}>
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
