import React, { Component } from 'react';
import {View } from 'react-native';
//import Rating from './pages/rating';
import Voting from "./pages/voting";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Elections extends Component {
  render() {
    return (
      <NavigationContainer>
        
       <View>
        <Voting/>
      </View> 
     
      </NavigationContainer>
    );
  }
}

export default Elections;