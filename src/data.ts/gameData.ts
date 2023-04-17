import { GameToken } from "../models.ts/gameToken";

export const makeGameBoard = () => {
    const gameBoard:GameToken[] = [];
    let id = 0;
for (let i = 0; i < 9; i++) {
    id++
    const gameToken = new GameToken(false, "", id)
        gameBoard[i] = gameToken;
     }
     return gameBoard;
}