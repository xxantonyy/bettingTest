/* eslint-disable max-len */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Game, GameType, gamesSlice } from './types';

const initialState: gamesSlice = {
    gameType: GameType.All,
    search: '',
    games: [],
    filteredGames: [],
};

export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setGames: (state, action: PayloadAction<Game[]>) => {
            state.games = action.payload;
            state.filteredGames = action.payload;
        },
        setGameType: (state, action) => {
            state.gameType = action.payload;
            if (state.gameType === GameType.All) {
                state.filteredGames = state.games.filter((game) => game.gameName.toLowerCase().includes(state.search.toLowerCase()));
            } else {
                state.filteredGames = state.games.filter((game) => game.typeDescription === state.gameType && game.gameName.toLowerCase().includes(state.search.toLowerCase()));
            }
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            if (state.gameType === GameType.All) {
                state.filteredGames = state.games.filter((game) => game.gameName.toLowerCase().includes(state.search.toLowerCase()));
            } else {
                state.filteredGames = state.games.filter((game) => game.typeDescription === state.gameType && game.gameName.toLowerCase().includes(state.search.toLowerCase()));
            }
        },
    },
});

export const { actions: gameActions } = gameSlice;
export const { reducer: gameReducer } = gameSlice;
