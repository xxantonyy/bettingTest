import { memo } from 'react';
import cls from './HeaderView.module.scss';
import Appearance from '@/assets/Vector.svg';
import Loop from '@/assets/loop.svg';
import { GameType } from '@/store/reducers/game/types';

interface HeaderViewProps {
   handleChangeGameType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
   handleEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
   handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
   handleSearchButton: () => void;
   gameType: GameType;
   search: string;
}

export const HeaderView = memo((props: HeaderViewProps) => {
    const {
        handleChangeGameType,
        handleEnterPress,
        handleChangeInput,
        handleSearchButton,
        gameType,
        search,
    } = props;

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
