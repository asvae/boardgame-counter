<script setup lang="ts">
import {addPlayer, config, removePlayer, resetCounts} from "../../store/store";
</script>

<template>
  <va-button to="/" class="ma-4" icon="arrow_back" size="large" round/>

  <va-card class="p-4 mb-4">
    <h2 class="va-h2">General</h2>
    <va-counter
        class="w-full"
        style="max-width: 300px;"
        label="Default points"
        buttons
        v-model="config.defaultPoints"
        manual-input
    />
    <br>
    <va-checkbox class="mt-6" label="Use wake lock" v-model="config.useWakeLock"/>
  </va-card>

  <va-card class="p-4">
    <h2 class="va-h2">Players</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <va-card
          class="pa-4 grid grid-cols-2"
          v-for="(playerCounter, index) in config.playerCounters"
          :key="index"
          :color="playerCounter.color"
      >

        <div class="col-span-1 flex flex-col">
          <va-input label="Name" class="w-full" preset="flat" v-model="playerCounter.name"/>
          <va-color-input label="Color" class="mt-4 w-full" v-model="playerCounter.color"/>
        </div>

        <div class="flex justify-end items-start col-span-1">
          <va-button class="flex-grow-0" @click="removePlayer(index)" color="danger" size="large" icon="delete"/>
        </div>
      </va-card>
    </div>

    <va-card
        class="flex items-center justify-center mt-6 p-4 h-28 cursor-pointer bg-gray-300"
        key="add"
        @click="addPlayer()"
        color="#cbe7cc"
    >
      <va-icon name="add" class="text-6xl text-gray-400 flex-grow-0" size="large"/>
    </va-card>

    <va-button class="mt-8" @click="resetCounts(), $router.push('/')" color="warning">Reset points</va-button>
  </va-card>
</template>

<style scoped>
.settings-icon {
  width: 3rem;
  height: 3rem;
  line-height: 1rem;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  color: white;
}
</style>
