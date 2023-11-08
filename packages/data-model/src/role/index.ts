import type { BaseEntity } from '../base-entity';

/**
 * Role Profile
 *
 * Base on feature code
 */
export type RoleProfile = 'master' | 'gerente' | 'operador';

/**
 * Role type
 */
export interface Role extends BaseEntity {
	profile: RoleProfile;
	isPublic?: boolean;
	permissionGroup?: [];
}
