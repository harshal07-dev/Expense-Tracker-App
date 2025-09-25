import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>
    <AppNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
