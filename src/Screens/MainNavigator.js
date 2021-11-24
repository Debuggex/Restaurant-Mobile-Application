import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../src/Screens/SearchScreen.js';
import Result from '../Screens/ShowResults';
import { exp } from 'react-native-reanimated';


const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
        
      <Stack.Navigator initialRouteName='SearchScreen'>
        <Stack.Screen name='SearchScreen' component={SearchScreen} options={{title:'SearchBar'}}/> 
        <Stack.Screen name='Result' component={Result} options={{title:'Restaurant'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;