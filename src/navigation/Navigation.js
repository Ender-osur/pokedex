import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexScreen from "../screens/Pokedex.js";
import AccountScreen from "../screens/Account.js";
import FavoriteScreen from "../screens/Favorite.js";

const Tab = createBottomTabNavigator();

export default Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pokedex" component={PokedexScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
    )
}