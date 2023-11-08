/* eslint-disable no-plusplus */
import { compareObjects } from '../compare-objects';

type Iterable = string | number | Object;

/**
 * __Compare Arrays__
 *
 * This function compare arrays of `string`, `number` or (plan) `Objects`.
 */
export function compareArrays<T extends Iterable>(
	left: Array<T>,
	right: Array<T>,
	compareFn: (left: T, right: T) => boolean = compareObjects
): boolean {
	if (left.length !== right.length) {
		return false;
	}

	for (let idx = 0; idx < left.length; idx++) {
		if (!compareFn(left[idx], right[idx])) {
			return false;
		}
	}

	return true;
}
