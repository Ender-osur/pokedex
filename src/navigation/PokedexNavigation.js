import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PokedexScreen from '../screens/PokedexScreen.js';
import PokemonScreen from '../screens/PokemonScreen.js';


const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name='Pokedex' 
          component={PokedexScreen}
           options={{
            title:"",
            headerTransparent: true,
           }}
           
        />
        <Stack.Screen 
            name='Pokemon'
            component={PokemonScreen}

        />
    </Stack.Navigator>
  )
}