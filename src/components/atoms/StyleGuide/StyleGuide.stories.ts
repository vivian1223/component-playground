import type { Meta, StoryObj } from '@storybook/react';

import { StyleGuide } from '.';

const meta = {
  title: 'StyleGuide/Guide',
  component: StyleGuide,
  tags: ['autodocs'],
} satisfies Meta<typeof StyleGuide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Guide: Story = {};
