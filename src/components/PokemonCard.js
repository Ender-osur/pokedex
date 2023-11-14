import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from 'react-native';
import React from 'react';

import getColorByPokemonType from '../utils/getColorByPokemonType';

const PokemonCard = (props) => {

    const { pokemons } = props;

    const pokemonColor = getColorByPokemonType(pokemons.type);

    const bgStyles = { backgroundColor: pokemonColor, ...styles.card };

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemons.name}`)
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={goToPokemon}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                <View style={bgStyles}>
                    <Text style={styles.number} >#{`${pokemons.order}`.padStart(3, 0)}</Text>
                    <Text style={styles.name}>{pokemons.name}</Text>
                    <Image source={{ uri: pokemons.image }} style={styles.image} />
                </View>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    bgStyles: {
        flex: 1,
        borderRadius: 15,

    },
    card: {
        flex: 1,
        width: 200,
        height: 150,
        margin: 5,
        borderRadius: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        position: "absolute",
        left: 10,
        top: 40,
        width: 100,
        height: 100,
    },
    name: {
        position: "absolute",
        top: 0,
        left: 15,
        fontSize: 25,
        textTransform: "capitalize"

    },
    number: {
        position: "absolute",
        top: 100,
        right: 10,
        color: "#fff",
        fontSize: 20
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
        alignItems: "center",
    },
})

export default PokemonCard;