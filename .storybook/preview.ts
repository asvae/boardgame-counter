import { type Preview, setup } from "@storybook/vue3";
import {createIconsConfig, createVuestic} from "vuestic-ui";

setup((app) => {
  app.use(createVuestic())
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
