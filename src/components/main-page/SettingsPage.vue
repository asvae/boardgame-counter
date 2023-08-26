<script setup lang="ts">
import {config, reset} from "@/store/store";

</script>

<template>
  <div class="settings-page">
    <router-link to="/" class="settings-icon">🔙</router-link>

    <va-counter style="width: 100%" label="Default points" buttons v-model="config.defaultPoints"/>

    <va-button class="mt-4" @click="reset(), $router.push('/')">Reset</va-button>
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
