import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { gameApi } from './reducers/game/api';

const rootReducer = combineReducers(reducers);

// eslint-disable-next-line no-use-before-define
export function setupStore(preloadedState?: DeepPartial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameApi.middleware),
    });
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
