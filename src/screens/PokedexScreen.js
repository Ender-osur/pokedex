import { SafeAreaView, Text } from 'react-native'
import React, {  useEffect, useState } from 'react'
import { callApi, getPokemonInfoByUrl } from "../api/pokemon";

import { API_HOST } from '../utils/constants';

export default function PokedexScreen() {
    const limit = 2;
    const offset = 0;
    const url = `${API_HOST}?limit=${limit}&offset=${offset}`;
    
    const [pokemons, setPokemons] = useState([]);
    console.log('Pokemons--->',pokemons)

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await callApi(url);
            const pokemonArray = [];

            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonInfoByUrl(pokemon.url);
                pokemonArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['home'].front_default,

                })
            }
            setPokemons([...pokemons, ...pokemonArray]);
        } catch (error) {
            console.log("Error wey")
            console.error(error);
        }
    };


    return (
        <SafeAreaView
            style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#6AA5CD',
                }
            }
        >
            <Text>Pokedex</Text>
        </SafeAreaView>
    )
}