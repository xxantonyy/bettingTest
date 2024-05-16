import { memo } from 'react';
import { Game } from '@/store/reducers/game/types';
import cls from './GameCard.module.scss';

export const GameCard = memo(({ game }: { game: Game }) => (
    <div key={game.gameID} className={cls.card}>
        <img
            className={cls.image}
            height={118}
            src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${game.gameID}.png`}
            alt={game.gameName}
        />
        <p className={cls.gameName}>{game.gameName}</p>
    </div>
));
