<script setup lang="ts">
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  incrementValue: {
    type: Number,
    required: true,
  }
})
</script>

<template>
<div class="change-button" @click="$emit('update:modelValue', modelValue + incrementValue)">
  {{incrementValue > 0 ? '+' : ''}}{{incrementValue}}
</div>
</template>

<style scoped>
.change-button {
  font-family: 'Fira Code', monospace;
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  font-weight: 700;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  &:hover {
   opacity: 0.8;
  }
}
</style>
