import { GameToken } from "../models.ts/gameClass";

//const gameBoard = JSON.parse(localStorage.getItem("storageList") as string);

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






/* const loadList = (todos: GameToken[]): void => {
    const getData = JSON.parse(localStorage.getItem('storageList') as string)
    if (getData !== null) {
      for (let i = 0; i < getData.length; i++) {
        const newItem = new GameToken(getData[i].isSet, getData[i].symbol, getData[i].id)
      }
    }
    return getData;
  } */