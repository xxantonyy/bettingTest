import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response } from './types';

export const gameApi = createApi({
    reducerPath: 'gameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://staging.belparyaj.com/api/pragmatic/' }),
    endpoints: (builder) => ({
        getGames: builder.query<Response, void>({
            query: () => 'game_list',
        }),
    }),
});

export const { useGetGamesQuery } = gameApi;
