//Todas las funciones necesarias para trabajar con la API de pokemon

export const callApi = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export const getPokemonInfoByUrl = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}