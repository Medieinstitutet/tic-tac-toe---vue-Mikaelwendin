<script setup lang="ts">import { ref } from 'vue';
import { makeGameBoard } from '../data.ts/gameData';
import { GameToken } from '../models.ts/gameToken';

interface IShowGameBoard {
    gameToken: GameToken;
}
defineProps<IShowGameBoard>();
defineEmits(["togglePiece"])


</script>
<template>
   <div class="gameBox" @click="() => $emit('togglePiece')">{{ gameToken.symbol }}</div>
   <div class="playerBox">{{  }}</div>
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
