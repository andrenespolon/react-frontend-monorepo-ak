import type { BaseEntity } from '../base-entity';

export enum CredentialStatusEnum {
	INACTIVE = 0,
	ACTIVE = 1,
}

/**
 * Credential
 */
export interface Credential extends BaseEntity {
	readonly clientId: string;
	readonly secretId: string;
	status: CredentialStatusEnum;
	deletedAt: string | null;
}

/**
 * Credential Request
 */
export type CredentialRequest = Pick<Credential, 'clientId' | 'secretId'> & {
	companies: number[];
};
