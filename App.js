import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home.js';
import Deals from './components/Deals.js';
import FavGames from './components/Fav_Games.js';

const Stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="FavGames" component={FavGames} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
