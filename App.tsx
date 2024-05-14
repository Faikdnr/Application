import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import *as Linking from "expo-linking"


const prefix = Linking.createURL('/')

export default function App() {
  const linking ={
    prefixes : [prefix],
    config:{
      screens:{
        Search:{
          
        }
      }
    }
  }
  return (
      <NavigationContainer>

          <RootNavigator />

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
