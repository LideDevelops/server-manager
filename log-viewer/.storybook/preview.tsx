import type { Decorator, Preview } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";

const withReduxProvider: Decorator = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const preview: Preview = {
  decorators: [withReduxProvider],
};

export default preview;
