import { GameToken } from "../models.ts/gameToken"
import { Player } from "../models.ts/player";

export const idWinner = (moves:number[]) => {

    const winCons = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let winner:boolean = winCons.some(winCon => {
        return winCon.every(con => moves.includes(con));
    })
    if (winner) {
        console.log(winner)
        return winner;
    }
    else return;
}
export const swapPlayer = (player: boolean) => {
player = !player
}
export const saveGame = (gameBoard: GameToken[]) => {
    localStorage.setItem("gameBoard", JSON.stringify(gameBoard))
    }

    export const addPlayer = (nameOne: string, nameTwo: string) => {
        const players:Player[] = [new Player(nameOne, [], 0), new Player(nameTwo, [], 0)]
       return players;
      
      }
    