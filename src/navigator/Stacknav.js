import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboardscreen } from '../screens/Dashboard';
import { ProdctDetailscreen } from '../screens/DetailProductscreen';
import { Cartscreen } from '../screens/CartScreen';
import { Likescreen } from '../screens/Likelist';




const Stack = createStackNavigator()
const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Dashboardscreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DetailProducts"
        component={ProdctDetailscreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
    
  )
}
export { FirstScreenNavigator }

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="CartScreen"
        component={Cartscreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DetailProducts"
        component={ProdctDetailscreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
export { SecondScreenNavigator }
const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LikeScreen"
        component={Likescreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DetailProducts"
        component={ProdctDetailscreen}
      />
    </Stack.Navigator>
  )
}
export { ThirdScreenNavigator }

