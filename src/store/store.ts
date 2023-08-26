import {reactive} from "vue";

export const config = reactive({
  defaultPoints: 20,
  playerCounters: [
    {value: 20, color: 'red'},
    {value: 20, color: 'green'},
  ]
})

export const reset = () => {
  config.playerCounters.forEach(counter => {
    counter.value = config.defaultPoints
  })
}
