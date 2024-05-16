import { memo, useState } from 'react';
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

    // const debouncedSearch = useDebounce(search, 500);

    const handleChangeGameType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(gameActions.setGameType(e.target.value as GameType));
        dispatch(gameActions.setSearch(''));
        setSearch('');
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSearchButton = () => {
        dispatch(gameActions.setSearch(search));
    };

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchButton();
        }
    };

    // useEffect(() => {
    //     dispatch(gameActions.setSearch(debouncedSearch));
    // }, [debouncedSearch, dispatch]);

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
