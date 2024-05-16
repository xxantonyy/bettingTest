import { memo, useCallback, useState } from 'react';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { gameActions } from '@/store/reducers/game';
import { GameActionCreator } from '@/store/reducers/game/services/action-creators';
import { GameType } from '@/store/reducers/game/types';
import { HeaderView } from './ui/HeaderView';

export const Header = memo(() => {
    const dispatch = useTypedDispatch();
    const gameType = GameActionCreator.GetGameType();
    const gameSearch = GameActionCreator.GetSearch();
    const [search, setSearch] = useState<string>(gameSearch);

    const handleChangeGameType = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(gameActions.setGameType(e.target.value as GameType));
        dispatch(gameActions.setSearch(''));
        setSearch('');
    }, [dispatch]);

    const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, []);

    const handleSearchButton = useCallback(() => {
        dispatch(gameActions.setSearch(search));
    }, [dispatch, search]);

    const handleEnterPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchButton();
        }
    }, [handleSearchButton]);

    return (
        <HeaderView
            handleChangeGameType={handleChangeGameType}
            handleEnterPress={handleEnterPress}
            handleChangeInput={handleChangeInput}
            handleSearchButton={handleSearchButton}
            gameType={gameType}
            search={search}
        />
    );
});
