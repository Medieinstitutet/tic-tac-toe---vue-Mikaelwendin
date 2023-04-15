<script setup lang="ts">
import { ref } from 'vue';
import { GameToken } from '../models.ts/gameToken';
import { makeGameBoard } from '../data.ts/gameData';
import ShowBoard from './ShowBoard.vue';
import { idWinner, saveGame } from '../functions/functions';
import { Player } from '../models.ts/player';
import { isSet } from '@vue/shared';

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



const handleClick = (i:number, playerOne:Player, playerTwo:Player) => {
    //console.log("Clicked " + i)
    if (!gameBoard.value[i].isSet) {
    gameBoard.value[i].isSet = true;
    if (playerSwap) {
    gameBoard.value[i].symbol = "X";
    playerOne.moves.push(i);
    idWinner(playerOne.moves)
    }
    if (!playerSwap) {
    gameBoard.value[i].symbol = "O";
    playerTwo.moves.push(i)
    idWinner(playerTwo.moves)
}
let isDone = checkBoard(gameBoard.value);
if (isDone) {
    window.alert("Lol");
    return 1;
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
@togglePiece="() => handleClick(id, players[0], players[1])"
:key="id"
></ShowBoard>
</div>
<div>{{ players[0].name }}</div>
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