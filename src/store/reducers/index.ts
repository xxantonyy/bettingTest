import { gameReducer as game } from './game';
import { gameApi } from './game/api';

export default {
    game,
    [gameApi.reducerPath]: gameApi.reducer,
};
