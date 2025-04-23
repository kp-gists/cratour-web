import { useQuery } from '@tanstack/react-query';
import { Pagination } from '@/types/common';
import { fetchAllCategories, fetchToursByCategorySlug } from '@/lib/query/hashtags';

export const useGetAllCategories = ({ page, pageSize, sort }: Pagination) => {
	const {
		data: categories,
		isLoading: loadingCategories,
		isError: isErrorCategories,
		error: categoryError,
		refetch: refetchCategories,
	} = useQuery({
		queryKey: ['qk_categories'],
		queryFn: () => fetchAllCategories({ page, pageSize, sort }),
	});
	return {
		categories,
		loadingCategories,
		isErrorCategories,
		categoryError,
		refetchCategories,
	};
};

export const useGetCategory = ({ slug, pagination: { page = 1, pageSize = 25, sort = 'asc' } }: { pagination: Pagination; slug: string }) => {
	const {
		data: category,
		isLoading: isLoadingCategory,
		isError: isErrorCategory,
		error: errorCategory,
		refetch: refetchCategory,
	} = useQuery({
		queryKey: ['qk_category', slug],
		queryFn: () =>
			fetchToursByCategorySlug({
				slug,
				pagination: {
					page,
					pageSize,
					sort,
				},
			}),
	});

	return {
		category,
		isLoadingCategory,
		isErrorCategory,
		errorCategory,
		refetchCategory,
	};
};
