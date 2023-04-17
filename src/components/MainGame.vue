<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Player } from '../models.ts/player';
import GameBoard from './GameBoard.vue';
import { addPlayer } from '../functions/functions';
const state = ref({
  nameOne: "",
  nameTwo: "",
  isReady: false,
})
const players = ref<Player[]>([])
  if (localStorage.getItem("players") !== null) {
    players.value = JSON.parse(localStorage.getItem("players") || "[]");
    state.value.isReady = true;
  }


</script>
<template>
      <div v-if="!state.isReady">
    <h1>Welcome to the game!</h1>
    <form @submit.prevent="players = addPlayer(state.nameOne, state.nameTwo); {{ state.isReady = true }}">
    <input v-model="state.nameOne" placeholder="Spelare 1" />
    <input v-model="state.nameTwo" placeholder="Spelare 2"/>
    <button>Save</button>
  </form>
</div>
<div v-if="state.isReady"><GameBoard v-bind:players="players"></GameBoard></div>
</template>
<style scoped></style>
