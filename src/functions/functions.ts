import { makeGameBoard } from "../data.ts/gameData";
import { GameToken } from "../models.ts/gameToken"
import { Player } from "../models.ts/player";

export const idWinner = (moves:number[], player:Player) => {

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
        player.points ++;
        return winner;
    }
    else return false;
}

export const clearPlayers = (players:Player[]) => {

    players[0].moves = [];
    players[1].moves = [];

}

export const saveGame = (gameBoard: GameToken[], lastValue:string, counter:number, players:Player[]) => {
    localStorage.setItem("gameBoard", JSON.stringify(gameBoard))
    localStorage.setItem("lastValue", lastValue)
    localStorage.setItem("counter", JSON.stringify(counter))
    localStorage.setItem("players", JSON.stringify(players))
    }

    export const addPlayer = (nameOne: string, nameTwo: string) => {
        const players:Player[] = [new Player(nameOne, [], 0), new Player(nameTwo, [], 0)]
       return players;
      
      }
      export const resetGame = () => {
        localStorage.clear();
        location.reload();
        
      }
    