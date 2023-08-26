<script setup lang="ts">
import {useWakeLock} from "./utils/wake-lock";

useWakeLock()
</script>

<template>
  <router-view style="height: 100%;"/>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  padding: 0;
}
</style>
