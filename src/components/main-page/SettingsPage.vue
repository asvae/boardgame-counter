<script setup lang="ts">
import {config, resetCounts, addPlayer} from "../../store/store";
</script>

<template>
  <div class="settings-page">
    <router-link to="/" class="settings-icon">🔙</router-link>

    <va-card title="Settings">
      <va-counter style="width: 100%" label="Default points" buttons v-model="config.defaultPoints"/>

      <va-checkbox class="mt-6" label="Use wake lock" v-model="config.useWakeLock"/>

      <div class="mt-6" v-for="(playerCounter, index) in config.playerCounters">
        <va-input :label="`Player: ${index+1}`" v-model="playerCounter.name"/>
        <va-color-input class="mt-4" v-model="playerCounter.color"/>
        <va-button size="small" @click="config.playerCounters.pop()">-</va-button>
      </div>
      <va-button class="mt-4" @click="addPlayer()">+</va-button>
      <br>
      <va-button class="mt-8" @click="resetCounts(), $router.push('/')">Reset</va-button>
    </va-card>
  </div>
</template>

<style>
.settings-page {
  background-color: #c0b6b6;
  position: relative;
  padding: 4rem 2rem 0;
  .settings-icon {
    width: 3rem;
    height: 3rem;
    line-height: 1rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 3rem;
    color: white;
  }
}
</style>
