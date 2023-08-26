<script setup lang="ts">
import ChangeButton from './ChangeButton.vue'
import {computed} from "vue";

const props = defineProps({
  modelValue: {type: Number, required: true},
  color: {type: String, required: true},
})

const emit = defineEmits<{
  'update:modelValue': number,
}>()

const modelValueProxy = computed({
  get: () => {
    return props.modelValue
  },
  set: (value) => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div
      class="player-counter"
      :style="{backgroundColor: color}"
  >
    <div class="value-container">
      <span class="value">{{ modelValueProxy }}</span>
    </div>
    <div class="block top" @click="$emit('update:modelValue', modelValueProxy + 1)"/>
    <div class="block bottom" @click="$emit('update:modelValue', modelValueProxy - 1)"/>
    <change-button
        class="button top"
        v-model="modelValueProxy"
        :increment-value="+5"
    />
    <change-button
        class="button bottom"
        v-model="modelValueProxy"
        :increment-value="-5"
    />
  </div>
</template>

<style scoped>
.player-counter {
  font-family: 'Fira Code', monospace;
  width: 100%;
  position: relative;

  .value-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .value {
      font-size: 120px;
      color: white;
      user-select: none;
    }
  }

  .block {
    position: absolute;
    width: 100%;
    height: 50%;

    &.top {
      top: 0;
    }

    &.bottom {
      top: 50%;
      background-color: white;
      opacity: 0.2;
    }
  }

  .button {
    position: absolute;
    right: 2rem;

    &.top {
      bottom: calc(50% + 1rem);
    }

    &.bottom {
      top: calc(50% + 1rem);
    }
  }
}
</style>
