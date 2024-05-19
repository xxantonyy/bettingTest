import { Game, GameType } from '../types';

export const filterGames = (games: Game[], gameType: GameType, search: string): Game[] => {
    const lowercasedSearch = search.toLowerCase();
    return games.filter((game) => (gameType === GameType.All || game.typeDescription === gameType)
        && game.gameName.toLowerCase().includes(lowercasedSearch));
};
