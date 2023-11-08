import React from 'react';

import { render } from '@testing-library/react';

import { Button } from '../button';

describe('Button', () => {
	/**
	 * default
	 */
	it('renders with basic usage', () => {
		const { getByTestId } = render(<Button>Button</Button>);
		expect(getByTestId('button')).toBeDefined();
	});

	/**
	 * isLoading
	 */
	it('should have a spinner when isLoading is true', () => {
		const { getByTestId } = render(<Button isLoading>Button</Button>);
		expect(getByTestId('spinner-wrapper')).toBeDefined();
	});

	/**
	 * isDisabled
	 */
	it('should be render a disabled state', () => {
		const { getByTestId } = render(
			<Button isDisabled testId='button'>
				Button
			</Button>
		);
		expect(getByTestId('button')).toBeDisabled();
	});
});
