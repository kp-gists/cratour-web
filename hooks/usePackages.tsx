import { useQuery } from '@tanstack/react-query';
import { fetchAllPackages, fetchAllTourPackages, fetchPackageDetails } from '@/lib/query/tour-packages';
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

export const useGetTourPackage = (id: string) => {
	const {
		data: tourPackage,
		isLoading: loadingTour,
		isError: isErrirTour,
		error: errorTour,
		refetch: refetchTour,
	} = useQuery({
		queryKey: ['qk_package' + id],
		queryFn: () => fetchPackageDetails(id),
	});
	return {
		tourPackage,
		loadingTour,
		isErrirTour,
		errorTour,
		refetchTour,
	};
};
