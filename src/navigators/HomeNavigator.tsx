import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import { Image } from "react-native";
const Stack = createStackNavigator();
function HomeNavigator(){
    return(

      <Stack.Navigator>
           <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerStyle: { backgroundColor:"#6E7480"},
            headerTitle: () => (
            <Image
            source={require("../../assets/jetlogo.png")}
            style ={{width:70, height:30}}
            />
         )
        }} 
        />
      </Stack.Navigator>
    )
}

export default HomeNavigator;