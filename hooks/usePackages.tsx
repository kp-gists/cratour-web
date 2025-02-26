import { useQuery } from '@tanstack/react-query';
import { fetchAllPackages, fetchPackageDetailsBySlug } from '@/lib/query/tour-packages';
import { Pagination } from '@/types/common';

export const useGetAllPackages = ({ page, pageSize }: Pagination) => {
	const {
		data: tours,
		isLoading: isLoadingTours,
		isError: isErrorTour,
		error: errorTour,
		refetch: refetchTours,
	} = useQuery({
		queryKey: ['qk_packages'],
		queryFn: () => fetchAllPackages({ page, pageSize }),
	});
	return {
		tours,
		isLoadingTours,
		isErrorTour,
		errorTour,
		refetchTours,
	};
};

export const useGetTourPackage = (slug: string) => {
	const {
		data: tourPackage,
		isLoading: loadingTour,
		isError: isErrorTour,
		error: errorTour,
		refetch: refetchTour,
	} = useQuery({
		queryKey: ['qk_package' + slug],
		queryFn: () => fetchPackageDetailsBySlug(slug),
	});
	return {
		tourPackage,
		loadingTour,
		isErrorTour,
		errorTour,
		refetchTour,
	};
};
