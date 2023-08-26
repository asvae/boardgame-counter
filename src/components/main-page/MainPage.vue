<script setup lang="ts">
import PlayerCounter from './PlayerCounter.vue'
import {config} from "../../store/store";
</script>

<template>
  <div class="main-page">
    <player-counter
        v-for="counter in config.playerCounters"
        v-model="counter.value"
        :color="counter.color"
        style="height: 50%"
    />
    <router-link to="settings" class="settings-icon">⚙</router-link>
  </div>
</template>

<style>
.main-page {
  width: 100%;
  height: 100%;
  position: relative;

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
