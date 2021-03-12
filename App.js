import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeStackNavigator from './src/navigation/StackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
