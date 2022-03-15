import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';
import Drawer1 from './Components/Drawer';
import { Text, View } from 'react-native';
import { createDrawerNavigator }
  from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  function NotificationsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center',
            justifyContent: 'center' }}>
      <Text>Notifications Page</Text>
      </View>
    );
    }
    
    function AboutScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center',
            justifyContent: 'center' }}>
      <Text>About Page</Text>
      </View>
    );
    }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications"
          component={NotificationsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
      {/* <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
export default App;