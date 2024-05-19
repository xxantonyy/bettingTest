import { createAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { Game, GameType } from '../types';

// Action Creators
export const setGames = createAction<Game[]>('gameSlice/setGames');
export const setGameType = createAction<GameType>('gameSlice/setGameType');
export const setSearch = createAction<string>('gameSlice/setSearch');

// Selectors
export const getSearch = (state: RootState) => state.game.search;
export const getGameType = (state: RootState) => state.game.gameType;
export const getGames = (state: RootState) => state.game.games;
export const getFilteredGames = (state: RootState) => state.game.filteredGames;
