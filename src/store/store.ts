import {reactive, watchEffect} from "vue";
import {getRandomColor} from "../utils/color-randomizer";

export const PLAYER_CONFIG_KEY = 'PLAYER_CONFIG_KEY';

type PlayerCounter = {
  value: number,
  color: string,
  name: string,
}

export const config = reactive({
  defaultPoints: 20,
  useWakeLock: true,
  playerCounters: [] as PlayerCounter[]
})


export const resetCounts = () => {
  config.playerCounters.forEach(counter => {
    counter.value = config.defaultPoints
  })
}

export const addPlayer = () => {
  config.playerCounters.push({
    value: config.defaultPoints,
    color: getRandomColor(),
    name: ''
  })
}

export const removePlayer = (index: number) => {
  config.playerCounters.splice(index, 1);
}

export const loadConfig = () => {
  const storedConfig = localStorage.getItem(PLAYER_CONFIG_KEY);
  if (storedConfig) {
    const parsedConfig = JSON.parse(storedConfig);
    console.log('parsedConfig', parsedConfig)
    config.defaultPoints = parsedConfig.defaultPoints;
    config.useWakeLock = parsedConfig.useWakeLock;
    config.playerCounters = parsedConfig.playerCounters;
  } else {
    addPlayer()
    addPlayer()
  }
}

// Kick-start

loadConfig() // Should run before watcher.

watchEffect(() => {
  console.log('watch', JSON.stringify(config))
  localStorage.setItem(PLAYER_CONFIG_KEY, JSON.stringify(config));
});

