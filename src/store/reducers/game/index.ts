/* eslint-disable max-len */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Game, GameType, gamesSlice } from './types';
import { filterGames } from './helpers/filterGames';

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
            state.filteredGames = filterGames(action.payload, state.gameType, state.search);
        },
        setGameType: (state, action: PayloadAction<GameType>) => {
            state.gameType = action.payload;
            state.filteredGames = filterGames(state.games, state.gameType, state.search);
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            state.filteredGames = filterGames(state.games, state.gameType, state.search);
        },
    },
});

export const { actions: gameActions } = gameSlice;
export const { reducer: gameReducer } = gameSlice;
