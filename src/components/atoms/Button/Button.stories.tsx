import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as InstagramIcon } from './../../../images/icons/instagram.svg';

import { Button } from '.';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
	args: {
		themeColor: 'primary',
		variant: 'contained',
		size: 'medium',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    themeColor: 'primary',
    text: 'Button',
		variant: 'contained',
  },
};

export const PrimaryWithStartIcon: Story = {
  args: {
    themeColor: 'primary',
    text: 'Button',
		variant: 'contained',
		startIcon: <InstagramIcon />,
  },
};

export const PrimaryOnlyWithIcon: Story = {
  args: {
    themeColor: 'primary',
		variant: 'contained',
		startIcon: <InstagramIcon />,
		size: 'small',
		onlyIcon: true,
  },
};

export const PrimaryWithEndIcon: Story = {
  args: {
    themeColor: 'primary',
    text: 'Button',
		variant: 'contained',
		endIcon: <InstagramIcon />,
  },
};

export const PrimaryOutlined: Story = {
  args: {
    themeColor: 'primary',
    text: 'Button',
		variant: 'outlined',
  },
};

export const PrimaryOutlinedWithStartIcon: Story = {
  args: {
    themeColor: 'primary',
    text: 'Button',
		variant: 'outlined',
		startIcon: <InstagramIcon />,
  },
};

export const PrimaryOutlinedOnlyWithIcon: Story = {
  args: {
    themeColor: 'primary',
		variant: 'outlined',
		startIcon: <InstagramIcon />,
		size: 'small',
		onlyIcon: true,
  },
};

export const PrimaryOutlinedWithEndIcon: Story = {
  args: {
    themeColor: 'primary',
    text: 'Button',
		variant: 'outlined',
		endIcon: <InstagramIcon />,
  },
};

export const Secondary: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'contained',
  },
};

export const SecondaryWithStartIcon: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'contained',
		startIcon: <InstagramIcon />,
  },
};

export const SecondaryOnlyWithIcon: Story = {
  args: {
    themeColor: 'secondary',
		variant: 'contained',
		startIcon: <InstagramIcon />,
		size: 'small',
		onlyIcon: true,
  },
};

export const SecondaryWithEndIcon: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'contained',
		endIcon: <InstagramIcon />,
  },
};

export const SecondaryOutlinedWithStartIcon: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'outlined',
		startIcon: <InstagramIcon />,
  },
};

export const SecondaryOutlinedOnlyWithIcon: Story = {
  args: {
    themeColor: 'secondary',
		variant: 'outlined',
		startIcon: <InstagramIcon />,
		size: 'small',
		onlyIcon: true,
  },
};

export const SecondaryOutlinedWithEndIcon: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'outlined',
		endIcon: <InstagramIcon />,
  },
};

export const White: Story = {
  args: {
    themeColor: 'white',
    text: 'Button',
		variant: 'contained',
  },
};

export const DisabledContained: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'contained',
		disabled: true,
  },
};

export const DisabledContainedWithStartIcon: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'contained',
		disabled: true,
		startIcon: <InstagramIcon />,
  },
};

export const DisabledContainedWithEndIcon: Story = {
  args: {
    themeColor: 'secondary',
    text: 'Button',
		variant: 'contained',
		disabled: true,
		endIcon: <InstagramIcon />,
  },
};




