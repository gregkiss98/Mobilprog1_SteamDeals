import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Deals from './Deals.js'
import Fav_Games from './Fav_Games.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "deals" component = {Deals} title = "Deals" />
         <Scene key = "favgames" component = {Fav_Games} title = "Fav_Games" />
      </Scene>
   </Router>
)
export default Routes