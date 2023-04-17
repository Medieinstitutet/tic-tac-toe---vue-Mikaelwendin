<script setup lang="ts">
import { GameToken } from '../models.ts/gameToken';

interface IShowBoardProps {
    gameToken: GameToken;
}
defineProps<IShowBoardProps>();
defineEmits(["togglePiece"])


</script>
<template>
    <div class="gameBox" @click="() => $emit('togglePiece')">{{ gameToken.symbol }}</div>
</template>
<style scoped>
.gameBox {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    height: 33%;
    border: 1px black solid;
    cursor: pointer;
    font-size: 40px;

}
</style>
