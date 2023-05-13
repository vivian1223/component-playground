import React from "react";

import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '.';


const meta = {
	title: "Molecules/Dropdown",
	component: Dropdown,
	tags: ['autodocs']
} satisfies Meta<typeof Dropdown>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		id: '0',
		dropdownButton: <p>Button</p>,
		dropdownOptions: <><p>Option 1</p><p>Option 2</p><p>Option 3</p><p>Option 4</p></>,
	}
};

