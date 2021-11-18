import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ResultsScreen from '../screens/Results';
import Quiz from '../screens/Quiz';
import HomeScreen from '../screens/Home';
import { RootStackParamList } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const defaultOptions = { headerShown: false }

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={defaultOptions} />
      <Stack.Screen name="Quiz" component={Quiz} options={defaultOptions} />
      <Stack.Screen name="Results" component={ResultsScreen} options={{ ...defaultOptions, gestureEnabled: false }} />
    </Stack.Navigator>
  );
}
