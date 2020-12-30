import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function Home({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Ezt az alkalmazást Kiss Gergő készítette Mobilprog 1 beadandóként.</Text>
          <Button
            title="Aktuális leárazás"
            onPress={() => navigation.navigate('Deals')}
          />
          <Button
            title="Kedvenc játék számláló"
            onPress={() => navigation.navigate('FavGames')}
          />
        </View>
      );
    }

export default Home