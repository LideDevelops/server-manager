import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import type { Decorator } from '@storybook/react';

export const withReduxProvider: Decorator = (Story, context) => (
  <Provider store={store}>
    <Story {...context} />
  </Provider>
);
