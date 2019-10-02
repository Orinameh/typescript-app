import React from 'react';
import { IState, IAction } from './interfaces';


const initialState: IState = {
    episodes: [],
    favorites: []
}

export const Store = React.createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA':
            
            return {
                ...state,
                episodes: action.payload
            }
        case 'ADD_FAV':
            // adds the favorited object inside the favorites array 
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                favorites: action.payload
                // favorites: state.favorites.filter((fav: IEpisode) => fav.id === action.payload.id)
            }
        default:
            return state
    }
}

export function StoreProvider({children}: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}