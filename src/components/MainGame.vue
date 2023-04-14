<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Player } from '../models.ts/player';
import GameBoard from './GameBoard.vue';
import { addPlayer } from '../functions/functions';
const state = ref({
  nameOne: "",
  nameTwo: "",
  testbool: false,
})
const players = ref<Player[]>([])


</script>
<template>
      <div v-if="!state.testbool">
    <h1>Welcome to the game!</h1>
    <form @submit.prevent=" players = addPlayer(state.nameOne, state.nameTwo), state.testbool = true">
    <input v-model="state.nameOne" placeholder="Spelare 1" />
    <input v-model="state.nameTwo" placeholder="Spelare 2"/>
    <button>Spara</button>
  </form>
</div>
<div v-if="state.testbool" ><span>{{ players[0].name + " = X " + players[0].points }}</span><span></span><span>{{ players[1].name + " = O " }}</span><span></span></div>
<div v-if="state.testbool"><GameBoard></GameBoard></div>
</template>
<style scoped></style>
