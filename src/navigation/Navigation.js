import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteNavigation from "../navigation/FavoriteNavigation.js";
import PokedexNavigation from "../navigation/PokedexNavigation.js";
import AccountNavigation from "../navigation/AccountNavigation.js";

const Tab = createBottomTabNavigator();

export default Navigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          fontWeight: "600",
        },
        style: {
          height: 80,
        },
        activeBackgroundColor: "#C2E9EB",
        activeTintColor: "#000",
        adaptive: true,
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="heart" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => { return renderPokeball() }
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};


const renderPokeball = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 75,
        height: 75,
        top: -25
      }}
    />
  )
}