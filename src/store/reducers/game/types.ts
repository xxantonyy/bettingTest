export enum GameType {
   All = 'All',
   VIDEO_SLOTS = 'Video Slots',
   LIVE_GAMES = 'Live games',
}

export interface Game {
   'gameID': string,
   'gameName': string,
   'gameTypeID': string,
   'typeDescription': string,
   'technology': string,
   'platform': string,
   'demoGameAvailable': boolean,
   'aspectRatio': string,
   'technologyID': string,
   'gameIdNumeric': number,
   'jurisdictions': string[],
}

export interface gamesSlice {
   gameType: GameType,
   search: string,
   games: Game[],
   filteredGames: Game[],
}

export interface Response {
   status: number,
   result: Game[],
}
