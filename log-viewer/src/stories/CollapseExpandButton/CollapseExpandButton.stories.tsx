import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import CollapseExpandButton from '../components/CollapseExpandButton';

const meta: Meta<typeof CollapseExpandButton> = {
  title: 'Components/CollapseExpandButton',
  component: CollapseExpandButton,
  tags: ['autodocs'],
  argTypes: {
    expanded: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof CollapseExpandButton>;

export const Default: Story = {
  args: {
    expanded: false,
  },
  render: (args) => {
    const [expanded, setExpanded] = useState(args.expanded);
    return (
      <CollapseExpandButton
        expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      />
    );
  },
};
