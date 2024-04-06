import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import { Image, Text } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";


const Stack = createStackNavigator();
function HomeNavigator() {
  return (

    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#EFE3CB" },
          headerTitle: () => (
            <Image
              source={require("../../assets/Jetpazar.png")}
              style={{ width: 320, height: 50, alignSelf: 'center' }}

            />
          )
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "#ffffff",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#800000" },
          headerTitle: () => (
            <Text style={{ flexDirection:'row', alignItems:'center', fontWeight: 'bold', fontSize: 20, color: 'white',  }}>
              Ürünler
            </Text>
          )

        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator;