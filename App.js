import React, { Component } from 'react'
import {View,Text} from 'react-native';
import Header from './src/component/Header';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import AppNavigator from './src/component/Navigation'
import 'react-native-gesture-handler'
//import{createStackNavigator,createSwitchNavigator,createAppContainer} from 'react-navigation'

 class App extends Component {
  render() {
    return (
      <AppNavigator />
      // <Header />  
    )
  }
}

export default App


// export default App;
