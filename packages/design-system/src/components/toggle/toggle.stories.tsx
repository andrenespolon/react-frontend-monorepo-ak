import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './index';

const meta: Meta<typeof Toggle> = {
	title: 'Components/Toggle',
	component: Toggle,
	parameters: {},
	tags: ['autodocs'],
	args: {},
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * __Checked__
 *
 * Default `false`.
 *
 * You can pass `isChecked` props as `boolean` or control it instead.
 *
 */
export const Checked: Story = {
	args: {
		value: 'default',
		label: 'Default checkbox',
	},
};

/**
 * __Disabled__
 *
 * Default `false`.
 *
 * You can pass `isDisabled` props as `boolean` or control it instead.
 *
 */
export const Disabled: Story = {
	args: {
		isDisabled: true,
		value: 'default',
		label: 'Default checkbox',
	},
};

/**
 * __Size__
 *
 * Default `medium`.
 *
 * You can pass `small` or `large` props as `string`.
 *
 */
export const Size: Story = {
	args: {
		size: 'large',
		value: 'default',
		label: 'Default checkbox',
	},
};
