import { memo, useState } from 'react';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { gameActions } from '@/store/reducers/game';
import { GameActionCreator } from '@/store/reducers/game/services/action-creators';
import { GameType } from '@/store/reducers/game/types';
import Appearance from '../../../../assets/Vector.svg';
import Loop from '../../../../assets/loop.svg';
import cls from './Header.module.scss';

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
        <>
            <div className={cls.headerWrapper_left}>
                <div className={cls.gameType}>Game Type</div>
                <Appearance height={7} width={12} className={cls.arrow} />
                <select
                    value={gameType}
                    className={cls.select}
                    name="selectGame"
                    id="selectGame"
                    onChange={(e) => handleChangeGameType(e)}
                >
                    <option value={GameType.All}>All</option>
                    <option value={GameType.VIDEO_SLOTS}>Video Slots</option>
                    <option value={GameType.LIVE_GAMES}>Live games</option>
                </select>
            </div>
            <div className={cls.headerWrapper_right}>
                <p className={cls.search}>Search</p>
                <div className={cls.searchWrapper}>
                    <div className={cls.searchInput}>
                        <Loop height={20} width={20} />
                        <input
                            onKeyDown={(e) => handleEnterPress(e)}
                            value={search}
                            onChange={(e) => handleChangeInput(e)}
                            placeholder="Search"
                            className={cls.input}
                            type="text"
                            name="searchInput"
                            id="searchInput"
                        />
                    </div>
                    <button
                        onClick={handleSearchButton}
                        className={cls.searchButton}
                        type="button"
                    >
                        SEARCH
                    </button>
                </div>
            </div>
        </>
    );
});
