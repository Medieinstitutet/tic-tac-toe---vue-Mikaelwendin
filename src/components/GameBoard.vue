<script setup lang="ts">
import { ref } from 'vue';
import { GameToken } from '../models.ts/gameToken';
import { makeGameBoard } from '../data.ts/gameData';
import ShowBoard from './ShowBoard.vue';
import { idWinner, saveGame } from '../functions/functions';
import { Player } from '../models.ts/player';

interface IGameBoardProps {
    players: Player[];
}

defineProps<IGameBoardProps>();
let playerSwap: boolean = true;
const gameBoard = ref<GameToken[]>(makeGameBoard());

const checkBoard = (gameBoard:GameToken[]) => {
   let check = gameBoard.findIndex(done => done.isSet === false)
   if (check > 0) {
    return false
   }
   return true;
}

const handleClick = (i:number, players:Player[]) => {
    if (!gameBoard.value[i].isSet) {
    gameBoard.value[i].isSet = true;
    if (playerSwap) {
    gameBoard.value[i].symbol = "X";
    players[0].moves.push(i);
    idWinner(players[0].moves, players[0])
    }
    if (!playerSwap) {
    gameBoard.value[i].symbol = "O";
    players[1].moves.push(i)
    idWinner(players[1].moves, players[1])
}
let isDone = checkBoard(gameBoard.value);
if (isDone) {
    window.alert("Lol");
    return 1;
}
playerSwap = !playerSwap
}
saveGame(gameBoard.value)
    console.log(players[0]);
    console.log(players[1]);
}


</script>
<template>
    <div class="gameBoard">
<ShowBoard :gameToken="gameToken"
v-for="(gameToken, id) in gameBoard"
@togglePiece="() => handleClick(id, players)"
:key="id"
></ShowBoard>
</div>
<div class="playerBox">{{ players[0].name + " = X - Points: " + players[0].points }}</div>
<div class="playerBox">{{ players[1].name + " = O - Points: " + players[1].points }}</div>
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