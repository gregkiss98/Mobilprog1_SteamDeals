import React, {useReducer} from 'react';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = 0;

const reducer = (state, action) => {

  switch (action) {

    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
    
  }
};


const Fav_Games = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{count} db kedvenc játékom van</Text>
      <Button title="Kedvenc játékok számának növelése" onPress={() => dispatch('increment')}/>
      <Button title="Kedvenc játékok számának csökkentése" onPress={() => dispatch('decrement')}/>
      <Button title="Nincs kedvenc játékom :(" onPress={() => dispatch('reset')}/>
    </View>
  );
}

export default Fav_Games;