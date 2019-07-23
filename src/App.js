import React, { Component } from 'react'

import SplashScreen from './Views/SplashScreen'
import Category from './Views/CategoryScreen'
import NewsView from './Views/NewsViews'
import SearchScreen from './Views/SearchScreen'

import { createAppContainer,createSwitchNavigator,createStackNavigator } from "react-navigation";

 
import { useScreens } from 'react-native-screens';


useScreens();

const Main = createStackNavigator(
  {
    Category,
    NewsView,
    SearchScreen
  }
)


const AppContainer = createAppContainer(createSwitchNavigator(
  {
    SplashScreen,
    App:Main
  }
))

export default class App extends Component {

  render() {
    return (

        <AppContainer />
    )
  }
}
