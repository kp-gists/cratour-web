export interface ResTours<T = any> {
	data: T[] | [];
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}
