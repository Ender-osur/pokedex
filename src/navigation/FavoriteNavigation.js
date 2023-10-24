import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import favoriteScreen from '../screens/FavoriteScreen.js';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name='Favorite' 
          component={favoriteScreen}
           options={{
            title:"Favoritos"
           }}
        />
    </Stack.Navigator>
  )
}