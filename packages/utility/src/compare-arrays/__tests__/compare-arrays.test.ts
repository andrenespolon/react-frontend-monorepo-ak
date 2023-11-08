import { compareArrays } from '../compare-arrays';

describe('compareArrays', () => {
	/**
	 * Porsitive test
	 */
	it('should be true when compare string arrays', () => {
		const firstArr = ['array', 'test'];
		const secondArr = ['array', 'test'];

		expect(compareArrays(firstArr, secondArr)).toBe(true);
	});

	/**
	 * Negative test
	 */
	it('shoud be false when compare string arrays', () => {
		const firstArr = ['array', 'test'];
		const secondArr = ['array', '_test_'];

		expect(compareArrays(firstArr, secondArr)).toBe(false);
	});

	/**
	 * Porsitive test
	 */
	it('should be true when compare object arrays', () => {
		const firstArr = [
			{
				a: 'a',
				b: 'b',
			},
		];
		const secondArr = [
			{
				a: 'a',
				b: 'b',
			},
		];

		expect(compareArrays(firstArr, secondArr)).toBe(true);
	});

	/**
	 * Negative test
	 */
	it('should be false when compare object arrays', () => {
		const firstArr = [
			{
				a: 'a',
				b: 'b',
			},
		];
		const secondArr = [
			{
				a: 'a',
				b: '_b_',
			},
		];

		expect(compareArrays(firstArr, secondArr)).toBe(false);
	});
});
