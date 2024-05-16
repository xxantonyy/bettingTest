import { memo, useEffect, useState } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import { useGetGamesQuery } from '@/store/reducers/game/api';
import { GameActionCreator } from '@/store/reducers/game/services/action-creators';

import { gameActions } from '@/store/reducers/game';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { Game } from '@/store/reducers/game/types';
import { GamesList } from './ui/GamesList';

export const Content = memo(() => {
    const dispatch = useTypedDispatch();

    const { data, isFetching } = useGetGamesQuery();
    const { isIntersecting, measureRef } = useOnScreen();

    const [games, setGames] = useState<Game[]>([]);
    const [loaded, setLoaded] = useState<number>(60);

    const gamesFilteredList = GameActionCreator.GetFilteredGames();

    useEffect(() => {
        if (isIntersecting) {
            setLoaded((prevLoaded) => prevLoaded + 60);
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
        setLoaded(60);
    }, [gamesFilteredList]);

    return (
        <GamesList measureRef={measureRef} games={games} isFetching={isFetching} />
    );
});
