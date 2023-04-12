<script setup lang="ts">
import { ref } from 'vue';
import { GameToken } from '../models.ts/gameClass';
import { makeGameBoard } from '../data.ts/gameData';
import ShowBoard from './ShowBoard.vue';

let playerSwap: boolean = true;
let playerOne:number[] = [];
let playerTwo:number[] = [];

const winCon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const gameBoard = ref<GameToken[]>(makeGameBoard());
const handleClick = (i:number) => {
    console.log("Clicked " + i)
    if (!gameBoard.value[i].isSet) {
    gameBoard.value[i].isSet = true;
    if (playerSwap) {
    gameBoard.value[i].symbol = "X";
    playerOne.push(i);
    }
    if (!playerSwap) {
    gameBoard.value[i].symbol = "O";
    playerTwo.push(i)
}
playerSwap = !playerSwap
}
saveGame(gameBoard.value)
    console.log(playerOne);
    console.log(playerTwo);
}

const saveGame = (gameBoard: GameToken[]) => {
localStorage.setItem("gameBoard", JSON.stringify(gameBoard))
}

</script>
<template>
    <div class="gameBoard">
<ShowBoard :gameToken="gameToken"
v-for="(gameToken, id) in gameBoard"
@togglePiece="() => handleClick(id)"
:key="id"
></ShowBoard>
</div>
</template>
<style scoped>
.gameBoard {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 20vw;
    height: 20vw;
}

</style>