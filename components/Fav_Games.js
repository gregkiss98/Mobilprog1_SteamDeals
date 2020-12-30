import React, {useReducer} from 'react'
import { Text } from 'react-native';


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
    <div>
      {count} <Text>darab kedvenc játékod van</Text>
      <br></br>
      
      <button onClick={() => dispatch('increment')}>1 játék hozzáadása</button>
      <button onClick={() => dispatch('decrement')}>1 játék elvétele</button>
      <button onClick={() => dispatch('reset')}>Nincs kedvenc játékom :(</button>
    </div>
  );
};

export default Fav_Games;