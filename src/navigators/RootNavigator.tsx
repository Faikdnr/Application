import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children }) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: "#EFE3CB",
        borderWidth: 3,
        borderRadius: 33,
        justifyContent: "center",
        marginTop: -4,
        alignItems: "center",
        backgroundColor: "#800000",
        width: 58,
        height: 58,
      }}
    >
      <Entypo name="list" size={32} color="#EFE3CB" />
      
    </TouchableOpacity>
  );
};

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#EFE3CB",
        tabBarInactiveTintColor: "#EFE3CB",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
          name="AnaSayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
      <Tab.Screen
        name="Arama"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
       <Tab.Screen
          name="Liste"
          component={HomeNavigator}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
       <Tab.Screen
        name="Kullanıcı"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Kampanyalar"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>  
  );
}

export default RootNavigator;
