import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator, View} from 'react-native'
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, loadPokemons, isNow }) => {

    const LoadMore = () => {
        loadPokemons();
        console.log("cargando pokemos", isNow)
    }
    return (
        <View>
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemons={item}/>}
            contentContainerStyle={styles.flatListContainer}
            onEndReached={LoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <ActivityIndicator 
                    size="large"
                    style={styles.spinner}   
                    color="#AEAEAE"
                />
            }
        />
        
        </View>
    );
}
const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    }
})

export default PokemonList