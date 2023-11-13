import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Image: Story = {
	args: {
		src: 'https://randomuser.me/api/portraits/women/63.jpg',
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
		src: 'https://randomuser.me/api/portraits/women/63.jpg',
	},
};

export const Status: Story = {
	args: {
		status: 'approved',
		src: 'https://randomuser.me/api/portraits/women/63.jpg',
	},
};

export const Presence: Story = {
	args: {
		presence: 'online',
		src: 'https://randomuser.me/api/portraits/women/63.jpg',
	},
};

export const Size: Story = {
	args: {
		size: 'xxlarge',
		src: 'https://randomuser.me/api/portraits/women/63.jpg',
	},
};

export const Clickable: Story = {
	args: {
		src: 'https://randomuser.me/api/portraits/women/63.jpg',
		size: 'large',
		presence: 'online',
		// eslint-disable-next-line no-console
		onClick: console.log,
	},
};
