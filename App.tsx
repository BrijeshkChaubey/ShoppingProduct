import React from "react";

import { store } from "./src/redux/store";

import { Provider } from 'react-redux';

import { Bottomnav } from "./src/navigator/bottomnav";
import { Dashboardscreen } from "./src/screens/Dashboard";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";



const App = () => {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Bottomnav />
      </Provider>
    </SafeAreaProvider>
 )
}
export default App;