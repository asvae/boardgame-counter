<script setup lang="ts">
import ChangeButton from './ChangeButton.vue'
import {computed, ref} from "vue";
import {useChangedValue} from "../../utils/changed-value";

const props = defineProps({
  modelValue: {type: Number, required: true},
  color: {type: String, required: true},
  name: {type: String, required: true},
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void,
}>()

const modelValueProxy = computed({
  get: () => {
    return props.modelValue
  },
  set: (value) => {
    emit('update:modelValue', value)
  },
})

const valueComputed = computed(() => props.modelValue);
const changedValue = useChangedValue(valueComputed)
</script>

<template>
  <div
      class="player-counter"
      :style="{backgroundColor: color}"
  >
    <div class="value-container">
      <va-dropdown placement="left" :stateful="false" :modelValue="!!changedValue" :offset="10">
        <template #anchor>
          <span class="value">{{ modelValueProxy }}</span>
        </template>
        <va-dropdown-content class="change-display">
          <span v-if="!!changedValue">{{changedValue>0 ? '+' : ''}}{{changedValue}}</span>
        </va-dropdown-content>
      </va-dropdown>
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
    <div class="name">{{name}}</div>
  </div>
</template>

<style>
.change-display {
  background-color: transparent !important;
  box-shadow: none !important;
  color: rgba(255, 255, 255, 0.7) !important;
  font-weight: 700;
  font-size: 4rem;
}

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
    user-select: none;
    pointer-events: none;

    .value {
      font-size: 10rem;
      font-width: 700;
      color: white;
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
    right: 1.5rem;

    &.top {
      bottom: calc(50% + 1rem);
    }

    &.bottom {
      top: calc(50% + 1rem);
    }
  }

  .name {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 4rem;
    color: white;
    bottom: 0;
    user-select: none;
    pointer-events: none;
  }
}
</style>
