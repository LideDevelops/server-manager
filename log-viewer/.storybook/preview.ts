import type { Preview } from '@storybook/nextjs-vite';
import { withReduxProvider } from './withReduxProvider';

const preview: Preview = {
  decorators: [withReduxProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;