/**
 * Base Entity
 */
export interface BaseEntity {
	readonly id: number | string;
	createdAt: string;
	updatedAt: string;
}
