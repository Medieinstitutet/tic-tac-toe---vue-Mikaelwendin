<script setup lang="ts">import { ref } from 'vue';
import { makeGameBoard } from '../data.ts/gameData';
import { GameToken } from '../models.ts/gameToken';
import { Player } from '../models.ts/player';

interface IShowBoardProps {
    gameToken: GameToken;
}
defineProps<IShowBoardProps>();
defineEmits(["togglePiece"])


</script>
<template>
   <div class="gameBox" @click="() => $emit('togglePiece')">{{ gameToken.symbol}}</div>
</template>
<style scoped>
.gameBox {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size:large;
    width: 32%;
    border: 1px black solid;
}
</style>
