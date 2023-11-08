/**
 * Query Ordination Triage
 */
export type QueryOrdinationTriage<T> = keyof T;

/**
 * Query Ordination Sort
 */
export type QueryOrdinationSort = 'asc' | 'desc' | undefined;

/**
 * Query Order By
 */
export type QueryOrderBy<T> = {
	[key in QueryOrdinationTriage<T>]?: QueryOrdinationSort;
};

/**
 * Query Request
 */
export type QueryRequest<
	T extends object,
	K extends number | string = number,
> = {
	page?: number | string;
	perPage?: number | string;
	status?: K | number | string;
	search?: string;
	orderBy?: QueryOrderBy<T>;
};

/**
 * Query Pagination Response
 */
export type QueryPaginationResponse<T extends object> = {
	currentPage: number;
	items: T | Partial<T>[] | undefined;
	perPage: number;
	totalItems: number;
};
