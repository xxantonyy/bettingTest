import { RootState } from '@/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const GameActionCreator = {
    GetSearch: () => useTypedSelector((state: RootState) => state.game.search),
    GetGameType: () => useTypedSelector((state: RootState) => state.game.gameType),
    GetGames: () => useTypedSelector((state: RootState) => state.game.games),
    GetFilteredGames: () => useTypedSelector((state: RootState) => state.game.filteredGames),
};
