import { memo, useMemo } from 'react';
import cls from './GamesList.module.scss';
import { Game } from '@/store/reducers/game/types';
import PlayLogo from '@/assets/mainPic.svg';
import { Loading } from '@/widgets/Loading/Loading';
import { GameCard } from '../GameCard/GameCard';

interface GamesListProps {
    games: Game[];
    isFetching: boolean;
    measureRef: (node: Element) => void;
}

export const GamesList = memo((props: GamesListProps) => {
    const { games, isFetching, measureRef } = props;

    const gameCards = useMemo(() => (
        games.map((game) => <GameCard key={game.gameID} game={game} />)
    ), [games]);

    return (
        <>
            <div className={cls.contentHeader}>
                <PlayLogo
                    className={cls.playLogo}
                    height={30}
                    width={30}
                    fill="#f19021"
                />
                <p className={cls.text}>Pragmatic play</p>
            </div>
            {isFetching ? (
                <div className={cls.loadWrapper}>
                    <Loading />
                </div>
            ) : (
                <div className={cls.cardWrapper}>
                    {gameCards}
                </div>
            )}
            <div ref={measureRef} />
            {!isFetching && !games.length && <div>No results...</div>}
        </>
    );
});
