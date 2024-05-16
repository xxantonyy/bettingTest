import { memo, useEffect, useState } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import { useGetGamesQuery } from '@/store/reducers/game/api';
import { GameActionCreator } from '@/store/reducers/game/services/action-creators';
import { Loading } from '@/widgets/Loading/Loading';
import PlayLogo from '../../../../assets/mainPic.svg';
import cls from './Content.module.scss';
import { gameActions } from '@/store/reducers/game';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { Game } from '@/store/reducers/game/types';

export const Content = memo(() => {
    const dispatch = useTypedDispatch();

    const { data, isFetching } = useGetGamesQuery();
    const { isIntersecting, measureRef } = useOnScreen();

    const [games, setGames] = useState<Game[]>([]);
    const [loaded, setLoaded] = useState<number>(40);

    const gamesFilteredList = GameActionCreator.GetFilteredGames();

    useEffect(() => {
        if (isIntersecting) {
            setLoaded((prevLoaded) => prevLoaded + 40);
        }
    }, [isIntersecting]);

    useEffect(() => {
        setGames(gamesFilteredList.slice(0, loaded));
    }, [gamesFilteredList, loaded]);

    useEffect(() => {
        if (data) {
            dispatch(gameActions.setGames(data?.result));
        }
    }, [data, dispatch]);

    useEffect(() => {
        setLoaded(40);
    }, [gamesFilteredList]);

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
