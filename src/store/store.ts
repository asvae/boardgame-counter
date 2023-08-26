import {reactive} from "vue";
import {getRandomColor} from "../utils/color-randomizer";

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

addPlayer()
addPlayer()
