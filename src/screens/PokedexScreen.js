import { SafeAreaView, Text } from 'react-native'
import React, {  useEffect, useState } from 'react'

import PokemonList from '../components/PokemonList';
import { callApi, getPokemonInfoByUrl } from "../api/pokemon";
import { API_HOST } from '../utils/constants';

export default function PokedexScreen() {
    const limit = 20;
    const offset = 20;
    const url = `${API_HOST}?offset=${offset}&limit=${limit}`;
    
    const [pokemons, setPokemons] = useState([]);
    const [prueba, setPrueba] = useState();
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await callApi(url, nextUrl);

            setNextUrl(response.next);
            console.log(response.next);
            setPrueba(response)
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
        <SafeAreaView>
            <PokemonList 
                pokemons={pokemons} 
                loadPokemons={loadPokemons}
                isNext={nextUrl}
                isNow={prueba}
            />
            <Text></Text>
        </SafeAreaView>
    )
}