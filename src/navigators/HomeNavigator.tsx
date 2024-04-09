import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import { Image, Text } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { TouchableOpacity } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { useNavigation, getFocusedRouteNameFromRoute } from "@react-navigation/native";


const Stack = createStackNavigator();
function MyStack(navigation, route) {
  const tabHiddenRoutes = ["ProductDetails"]

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route, cartItems])
  
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
            <Text style={{ flexDirection: 'row', alignItems: 'center', fontWeight: 'bold', fontSize: 20, color: 'white', }}>
              Ürünler
            </Text>
          )

        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,

          headerStyle: { backgroundColor: "#EFE3CB" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 8 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation
                style={{ marginRight: 8 }}
                name="heart"
                size={26}
                color="#32177a"
              />
            </TouchableOpacity>
          ),
        }}
      />


    </Stack.Navigator>
  )
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />
}