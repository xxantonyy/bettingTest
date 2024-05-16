import { memo } from 'react';
import cls from './GamesList.module.scss';
import { Game } from '@/store/reducers/game/types';
import PlayLogo from '@/assets/mainPic.svg';
import { Loading } from '@/widgets/Loading/Loading';

interface GamesListProps {
   games: Game[];
   isFetching: boolean,
   measureRef: (node: Element) => void
}

export const GamesList = memo((props: GamesListProps) => {
    const {
        games,
        isFetching,
        measureRef,
    } = props;

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
                    {!!games
                        && games.map((game) => (
                            <div key={game.gameID} className={cls.card}>
                                <img
                                    className={cls.image}
                                    height={118}
                                    src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${game.gameID}.png`}
                                    alt={game.gameName}
                                />
                                <p className={cls.gameName}>{game.gameName}</p>
                            </div>
                        ))}
                </div>
            )}
            <div ref={measureRef} />
            {!isFetching && !games?.length && <div>No results...</div>}
        </>
    );
});
