/* eslint-disable no-plusplus */

/**
 * __Compare objects__
 *
 * This function provide a recursive comparation of objects returning a boolean
 * value at the end.
 *
 * The params must be plan object types (not undefined neither nested object).
 */
export function compareObjects(objA?: Object, objB?: Object): boolean {
	if (objA === objB) {
		return true;
	}

	if (objA == null || objB == null) {
		return false;
	}

	/**
	 * Put all keys in order
	 */
	const keysA = Object.keys(objA).sort();

	/**
	 * Put all keys in order
	 */
	const keysB = Object.keys(objB).sort();

	if (keysA.length !== keysB.length) {
		return false;
	}

	const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

	for (let idx = 0; idx < keysA.length; idx++) {
		const key = keysA[idx];

		if (!bHasOwnProperty(key)) {
			return false;
		}

		if ((objA as any)[key] !== (objB as any)[key]) {
			return false;
		}
	}

	return true;
}
