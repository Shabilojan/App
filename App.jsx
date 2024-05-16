import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Tips from './screens/Tips';
import Tamil from './screens/Tamil';
import Gallery from './screens/Gallery';
import OpenCamera from './screens/OpenCamera'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Tips" component={Tips} options={{ headerShown: false }}/>
        <Stack.Screen name="Tamil" component={Tamil} options={{ headerShown: false }} />
        <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
        <Stack.Screen name="OpenCamera" component={OpenCamera} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
