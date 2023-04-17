<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { GameToken } from '../models.ts/gameToken';
import ShowBoard from './ShowBoard.vue';
import { clearPlayers, idWinner, makeGameBoard, resetGame, saveGame } from '../functions/functions';
import { Player } from '../models.ts/player';

interface IGameBoardProps {
    players: Player[];
}
defineProps<IGameBoardProps>();
let winner = ref();
let lastValue = ref("X");
const gameBoard = ref<GameToken[]>([]);
if ((localStorage.getItem("gameBoard") === null)) {
    gameBoard.value = makeGameBoard();
}
else {gameBoard.value = (JSON.parse(localStorage.getItem("gameBoard") || "[]"));
}



    const handleClick = (i:number, players:Player[]) => {
        let counter = JSON.parse(localStorage.getItem("counter") || "0");
        lastValue.value = localStorage.getItem("lastValue") || "X" as string;
        
    if (!gameBoard.value[i].isSet) {
    gameBoard.value[i].isSet = true;
    if (lastValue.value === "O") {
        gameBoard.value[i].symbol = "X"
        lastValue.value = "X"
        players[0].moves.push(i);
        winner.value = idWinner(players[0].moves, players[0])
        if (winner.value) {
            clearPlayers(players)
            winner.value = !winner.value;
            gameBoard.value = makeGameBoard();
            counter = -1;
        }
    }
    else {
        gameBoard.value[i].symbol = "O";
        lastValue.value = "O";
        players[1].moves.push(i);
        winner.value = idWinner(players[1].moves, players[1])
        if (winner.value) {
            clearPlayers(players)
            winner.value = !winner.value;
            gameBoard.value = makeGameBoard();
            counter = -1;
        }
    }
    counter ++;
    if (counter === 9) {
        gameBoard.value = makeGameBoard()
        clearPlayers(players)
        counter = 0;
    }
}
saveGame(gameBoard.value, lastValue.value, counter, players)
}



</script>
<template>
    <div class="gameBoard">
<ShowBoard :gameToken="gameToken"
@togglePiece="() => handleClick(id, players)"
v-for="(gameToken, id) in gameBoard"
:key="id"
></ShowBoard>
</div>
<div class="playerBox">{{ players[0].name + " = X - Points: " + players[0].points }}</div>
<div class="playerBox">{{ players[1].name + " = O - Points: " + players[1].points }}</div>
<button @click="resetGame">Reset game</button>
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