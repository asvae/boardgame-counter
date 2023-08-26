<script setup lang="ts">
import PlayerCounter from './PlayerCounter.vue'
import {config} from "../../store/store";
import {computed} from "vue";

const getItemStyle = index => {
  if (config.playerCounters.length % 2 === 1 && index === config.playerCounters.length - 1) {
    return { gridColumn: 'span 2' };
  }
  return {};
}

const gridClass = computed(() => {
  const length = config.playerCounters.length;
  if (length === 1) return 'grid-cols-1 grid-rows-1';
  if (length === 2) return 'grid-cols-1 grid-rows-2';
  if (length === 3) return 'grid-cols-2 grid-rows-2';
  if (length === 4) return 'grid-cols-2 grid-rows-2';
  if (length === 5) return 'grid-cols-2 grid-rows-3';
  if (length === 6) return 'grid-cols-2 grid-rows-3';
  return 'grid-cols-1';
})
</script>

<template>
  <div class="main-page" :class="gridClass">
    <player-counter
        class="flex-1 min-h-1/2"
        v-for="(counter, index) in config.playerCounters"
        :style="getItemStyle(index)"
        :key="index"
        v-model="counter.value"
        :color="counter.color"
        :name="counter.name"
    />
    <router-link to="settings" class="settings-icon">⚙</router-link>
  </div>
</template>

<style>
.main-page {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;

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
