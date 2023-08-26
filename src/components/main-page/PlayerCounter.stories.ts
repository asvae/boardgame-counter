import PlayerCounter from './PlayerCounter.vue'
import {ref} from "vue";

export default {
  title: 'PlayerCounter',
  component: PlayerCounter,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: {PlayerCounter},
  data: () => ({value: 20}),
  template: `<player-counter v-model="value" color="green" style="width: 400px"/>`,
})
