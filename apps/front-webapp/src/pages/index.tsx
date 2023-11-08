import React from 'react';

import {
	Avatar,
	AvatarGroup,
	Button,
	Checkbox,
	Toggle,
} from '@rfm/design-system';

export const RANDOM_USERS = [
	{
		email: 'chaki@me.com',
		name: 'Chaki Caronni',
		src: 'https://randomuser.me/api/portraits/men/60.jpg',
	},
	{
		email: 'nanop@outlook.com',
		name: 'Nanop Rgiersig',
		src: 'https://randomuser.me/api/portraits/men/61.jpg',
	},
	{
		email: 'dowdy@outlook.com',
		name: 'Dowdy Metzzo',
		src: 'https://randomuser.me/api/portraits/men/62.jpg',
	},
	{
		email: 'daveewart@msn.com',
		name: 'Daveewart Grdschl',
		src: 'https://randomuser.me/api/portraits/women/63.jpg',
	},
	{
		email: 'fwitness@optonline.net',
		name: 'Fwitness Tezbo',
		src: 'https://randomuser.me/api/portraits/women/64.jpg',
	},
	{
		email: 'nighthawk@yahoo.com',
		name: 'Nighthawk Wikinerd',
		src: 'https://randomuser.me/api/portraits/women/65.jpg',
	},
	{
		email: 'naupa@me.com',
		name: 'Naupa Telbij',
		src: 'https://randomuser.me/api/portraits/women/66.jpg',
	},
	{
		email: 'jsmith@verizon.net',
		name: 'Jsmith Rnelson',
		src: 'https://randomuser.me/api/portraits/women/67.jpg',
	},
	{
		email: 'maneesh@msn.com',
		name: 'Maneesh Solomon',
		src: 'https://randomuser.me/api/portraits/men/68.jpg',
	},
	{
		email: 'kiddailey@yahoo.com',
		name: 'Kiddailey Kodeman',
		src: 'https://randomuser.me/api/portraits/women/69.jpg',
	},
	{
		email: 'kodeman@att.net',
		name: 'Kodeman Kiddailey',
		src: 'https://randomuser.me/api/portraits/women/70.jpg',
	},
	{
		email: 'solomon@att.net',
		name: 'Solomon Maneesh',
		src: 'https://randomuser.me/api/portraits/men/71.jpg',
	},
];

const wait = (time: number) => {
	return new Promise(resolve => {
		setTimeout(resolve, time);
	});
};

export default function Home() {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const handleWait = async () => {
		setIsLoading(true);
		await wait(2000);
		setIsLoading(false);
	};

	return (
		<div
			style={{
				padding: '8px',
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
			}}
		>
			<div>
				<p>Home</p>
			</div>
			<br />
			<div>
				<Avatar
					src='https://randomuser.me/api/portraits/women/68.jpg'
					presence='online'
					// eslint-disable-next-line no-console
					onClick={() => console.log('clicked')}
				/>
			</div>
			<br />
			<div>
				<AvatarGroup data={RANDOM_USERS} />
			</div>
			<br />
			<div
				style={{
					display: 'flex',
					gap: '8px',
				}}
			>
				<Button isDisabled={isLoading} onClick={handleWait}>
					LoadingButton
				</Button>
				<Button isLoading={isLoading} appearance='primary' onClick={handleWait}>
					Outlined
				</Button>
			</div>
			<br />
			<div>
				<Checkbox label='Default checkbox' isDisabled={isLoading} />
			</div>
			<br />
			<div>
				<p>Default toggle</p>
				<Toggle
					id='default-toggle'
					label='Default checkbox'
					isDisabled={isLoading}
				/>
			</div>
		</div>
	);
}
