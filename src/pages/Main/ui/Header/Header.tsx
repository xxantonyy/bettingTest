import { memo, useCallback, useState } from 'react';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
    getGameType, getSearch, setGameType, setSearch,
} from '@/store/reducers/game/services/action-creators';
import { GameType } from '@/store/reducers/game/types';
import { HeaderView } from './ui/HeaderView';

export const Header = memo(() => {
    const dispatch = useTypedDispatch();
    const gameType = useTypedSelector(getGameType);
    const gameSearch = useTypedSelector(getSearch);
    const [searchValue, setSearchValue] = useState<string>(gameSearch);

    const handleChangeGameType = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setGameType(e.target.value as GameType));
        dispatch(setSearch(''));
        setSearchValue('');
    }, [dispatch]);

    const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    const handleSearchButton = useCallback(() => {
        dispatch(setSearch(searchValue));
    }, [dispatch, searchValue]);

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
            search={searchValue}
        />
    );
});
