<script setup lang="ts">
import { ref } from 'vue';
import { GameToken } from '../models.ts/gameToken';
import { makeGameBoard } from '../data.ts/gameData';
import ShowBoard from './ShowBoard.vue';
import { idWinner, saveGame } from '../functions/functions'
import { Player } from '../models.ts/player';

let playerSwap: boolean = true;
let playerOne:number[] = [];
let playerTwo:number[] = [];

const gameBoard = ref<GameToken[]>(makeGameBoard());
const handleClick = (i:number) => {
    console.log("Clicked " + i)
    if (!gameBoard.value[i].isSet) {
    gameBoard.value[i].isSet = true;
    if (playerSwap) {
    gameBoard.value[i].symbol = "X";
    playerOne.push(i);
    idWinner(playerOne)
    }
    if (!playerSwap) {
    gameBoard.value[i].symbol = "O";
    playerTwo.push(i)
    idWinner(playerTwo)
}
playerSwap = !playerSwap
}
saveGame(gameBoard.value)
    console.log(playerOne);
    console.log(playerTwo);
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