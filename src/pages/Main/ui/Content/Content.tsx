import {
    memo, useEffect, useMemo, useState,
} from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { gameActions } from '@/store/reducers/game';
import { useGetGamesQuery } from '@/store/reducers/game/api';
import { GameActionCreator } from '@/store/reducers/game/services/action-creators';
import { GamesList } from './ui/GamesList';

export const Content = memo(() => {
    const dispatch = useTypedDispatch();

    const { data, isFetching } = useGetGamesQuery();
    const { isIntersecting, measureRef } = useOnScreen();

    const [loaded, setLoaded] = useState<number>(60);

    const gamesFilteredList = GameActionCreator.GetFilteredGames();

    const displayedGames = useMemo(() => gamesFilteredList.slice(0, loaded), [gamesFilteredList, loaded]);

    useEffect(() => {
        if (isIntersecting) {
            setLoaded((prevLoaded) => prevLoaded + 60);
        }
        if (data) {
            dispatch(gameActions.setGames(data?.result));
        }
    }, [data, dispatch, isIntersecting]);

    useEffect(() => {
        setLoaded(60);
    }, [gamesFilteredList]);

    return (
        <GamesList
            measureRef={measureRef}
            games={displayedGames}
            isFetching={isFetching}
        />
    );
});
