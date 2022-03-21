import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';
import Drawer1 from './Components/Drawer';
import { Text, View } from 'react-native';
import DetailScreen from './Components/DetailScreen';
import Cart from './Components/Cart';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={DetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
export default App;