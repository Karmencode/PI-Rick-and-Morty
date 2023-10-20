import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

const initialState = {
    myFavorites: [],
    allCharacters: [], /* copia para filtrar los favs y no pisar al array original de myFavorites */
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, 
                myFavorites: action.payload,
                 allCharacters: action.payload };

        // const addFavoritos = [...state.allCharacters,action.payload];
        // return{
        //     ...state,
        //     myFavorites: [...addFavoritos], /* creamos una copia de mis favoritos y le concatenamos lo que viene en el payload, a payload no se le hace un spread operator xq lo que viene es un objeto no un array para unirlo */
        //     allCharacters: [...addFavoritos]
        // };
        case REMOVE_FAV:
            return { ...state,
                 myFavorites: action.payload,
                 allCharacters: action.payload };
        /*  return{
             ...state,
             myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
             // filter generara un nuevo array con todos mis fav que su id sea diferente al enviado en el payload
         }; */
        case FILTER:
            const charactersFilter = state.allCharacters.filter(fav => fav.gender === action.payload)
            return {
                ...state,
                myFavorites:
                    action.payload === 'allCharacters'
                        ? [...state.allCharacters]  /* Es el punto extra de react hooks */
                        : charactersFilter
            }
        case ORDER:
            const cahartersOrder = [...state.myFavorites]
            return {
                ...state,
                myFavorites:
                    action.payload === 'A'
                        ? cahartersOrder.sort((a, b) => a.id - b.id)/*  ordena de menor a mayor */
                        : cahartersOrder.sort((a, b) => b.id - a.id)  /* ordena de mayor a menor el id */

            }

        default:
            return { ...state };
    }
};

export default reducer;