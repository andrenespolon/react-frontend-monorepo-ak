import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	args: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * __Default__
 *
 * A default image is displayed for avatars when a chosen source is unavailable
 * (for example, when there is a problem displaying the image due to an error),
 * or simply unspecified.
 *
 */
export const Default: Story = {
	args: {},
};

/**
 * __Image__
 *
 * You can pass `src` props as `text`.
 *
 */
export const Image: Story = {
	args: {
		src: 'https://avatars.githubusercontent.com/u/54320760?v=4',
	},
};

/**
 * __Disabled__
 *
 * You can pass `isDisabled` props as `boolean`.
 *
 */
export const Disabled: Story = {
	args: {
		isDisabled: true,
		src: 'https://avatars.githubusercontent.com/u/54320760?v=4',
	},
};

/**
 * __Status__
 *
 * Indicates contextual information by showing a small icon on the avatar.
 * Takes precedence over presence.You can pass `status` props as `text`.
 *
 */
export const Status: Story = {
	args: {
		status: 'approved',
		src: 'https://avatars.githubusercontent.com/u/54320760?v=4',
	},
};

/**
 * __Presence__
 *
 * Indicates a user's online status by showing a small icon on the avatar. You
 * can pass `presence` props as `text`.
 *
 */
export const Presence: Story = {
	args: {
		presence: 'online',
		src: 'https://avatars.githubusercontent.com/u/54320760?v=4',
	},
};

/**
 * __Size__
 *
 * You can pass `src` props as `text`.
 *
 */
export const Size: Story = {
	args: {
		size: 'xxlarge',
		src: 'https://avatars.githubusercontent.com/u/54320760?v=4',
	},
};

/**
 * __OnClick__
 *
 * You can pass `onClick` props as `Function`. Default is a `SyntheticBaseEvent`.
 * See devtools on console for more information.
 *
 */
export const Clickable: Story = {
	args: {
		src: 'https://avatars.githubusercontent.com/u/54320760?v=4',
		size: 'large',
		presence: 'online',
		// eslint-disable-next-line no-console
		onClick: console.log,
	},
};
