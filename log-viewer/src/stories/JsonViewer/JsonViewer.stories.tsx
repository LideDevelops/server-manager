import type { Meta, StoryObj } from '@storybook/react';
import { JsonViewer } from '../../components';

const meta: Meta<typeof JsonViewer> = {
  title: 'Components/JsonViewer',
  component: JsonViewer,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof JsonViewer>;

export const Default: Story = {
  args: {
    data: {
      name: 'Log Viewer',
      version: '1.0.0',
      logs: [
        { level: 'info', message: 'Started' },
        { level: 'error', message: 'Something failed' },
      ],
    },
  },
};
