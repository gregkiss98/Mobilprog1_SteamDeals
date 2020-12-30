import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppearanceProvider} from 'react-native-appearance';
import Home from './components/Home.js'
import Deals from './components/Deals.js'
import FavGames from './components/Fav_Games.js'

/*function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}s
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}*/

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
