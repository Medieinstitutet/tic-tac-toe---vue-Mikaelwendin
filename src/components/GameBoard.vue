<script setup lang="ts">
import { ref } from 'vue';
import { GameToken } from '../models.ts/gameClass';
import { makeGameBoard } from '../data.ts/gameData';
import ShowBoard from './ShowBoard.vue';

let playerSwap: boolean = true;

const gameBoard = ref<GameToken[]>(makeGameBoard());
const handleClick = (i:number) => {
    console.log("Clicked " + i)
    if (!gameBoard.value[i].isSet) {
    gameBoard.value[i].isSet = true;
    if (playerSwap) {
    gameBoard.value[i].symbol = "X";
    }
    else gameBoard.value[i].symbol = "O";
    playerSwap = !playerSwap
    saveGame(gameBoard.value)
}
    console.log(playerSwap);
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