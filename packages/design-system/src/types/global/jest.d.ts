/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

import type { CSSProperties } from 'react';

import { Matchers } from '@jest/expect';

interface JestNativeMatchers<R extends void | Promise<void>> {
	toBeDisabled(): R;
	toBeEmptyElement(): R;
	toBeEnabled(): R;
	toBeVisible(): R;
	toContainElement(element: ReactTestInstance | null): R;
	toHaveTextContent(
		text: string | RegExp,
		options?: { normalizeWhitespace: boolean }
	): R;
	toHaveProp(attr: string, value?: unknown): R;
	toHaveStyle(style: CSSProperties | string): R;
	toHaveAccessibilityState(state: AccessibilityState): R;
	toHaveAccessibilityValue(state: AccessibilityValueMatcher): R;
	/** @deprecated This function has been renamed to `toBeEmptyElement`. */
	toBeEmpty(): R;
}

// implicit jest globals, types coming from `@types/jest`
declare global {
	namespace jest {
		interface Matchers<R, T> extends JestNativeMatchers<R> {}
		interface JestMatchers<R> extends JestNativeMatchers<R> {}
	}
}

// explicit jest globals, types coming from `@jest/globals`
declare module '@jest/expect' {
	interface Matchers<R extends void | Promise<void>>
		extends JestNativeMatchers<R> {}
}
