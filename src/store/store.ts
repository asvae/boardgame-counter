import {reactive} from "vue";

export const config = reactive({
  defaultPoints: 20,
  useWakeLock: true,
  playerCounters: [
    {value: 20, color: '#770a77', name: 'Vasily'},
    {value: 20, color: '#158686', name: 'Pupkin'},
  ]
})

export const reset = () => {
  config.playerCounters.forEach(counter => {
    counter.value = config.defaultPoints
  })
}
