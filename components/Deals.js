import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getList } from '../services/list';

function Deals() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList()
      .then(title => {
        if(mounted) {
          setList(title)
        }
      })
    return () => mounted = false;
  }, [])


const goToFavGames = () => {
   Actions.favgames()
}

return (
   <TouchableOpacity style = {{ margin: 128 }} onPress = {goToFavGames}>
      <Text>Ezek itt a leárazott játékok, a következő oldalon a kedvenc játékaid számát adhatod meg</Text>
   </TouchableOpacity>
)

}

export default Deals