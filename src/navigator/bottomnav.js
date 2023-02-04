import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text ,Image} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { store } from "./src/redux/store";
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Dashboardscreen } from "./src/screens/Dashboard";
import { FirstScreenNavigator, SecondScreenNavigator, ThirdScreenNavigator } from "../navigator/Stacknav";



export const Bottomnav= () => {
  const Tab = createMaterialBottomTabNavigator()
  return (
    
      <NavigationContainer>
        <Tab.Navigator
       
         
          barStyle={{
            backgroundColor: 'lightblue'
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={FirstScreenNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name='home' size={30} color='brown' />

              ),
            }}

          />
           <Tab.Screen
            name="Cart"
            component={SecondScreenNavigator}
            options={{
              tabBarIcon: () => (
                <Fontisto name='shopping-bag' size={30}  color='brown' />
                )}}
          />
          <Tab.Screen
            name="Favorite"
            component={ThirdScreenNavigator}
            options={{
              tabBarIcon: () => (
                <Fontisto name='favorite' size={30}   color='brown' />

              )
            }}
          />
         

        </Tab.Navigator>
      </NavigationContainer>
   

  )
}


