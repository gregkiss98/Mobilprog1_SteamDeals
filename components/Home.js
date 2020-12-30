import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

function Home() {
   const goToDeals = () => {
      Actions.deals()
   }
   return (
      <TouchableOpacity style = {{ margin: 20 }} onPress = {goToDeals}>
         <Text>Ez a weboldal a Web-es rendszerek programozása 1 nevű órára készült Kiss Gergő által, beadandó gyanánt. Kattints erre a szövegre ha tovább akarsz lépni!</Text>
      </TouchableOpacity>
   )
}
export default Home