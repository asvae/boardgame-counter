import ChangeButton from './ChangeButton.vue'

export default {
  title: 'ChangeButton',
  component: ChangeButton,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: {ChangeButton},
  data: () => ({value: 0}),
  template: `
    <div style="background-color: red; padding: 50px">
      <change-button v-model="value"  :increment-value="5"/>
      <change-button v-model="value"  :increment-value="-5"/>
      <p>{{ value }}</p>
    </div>
  `,
})
