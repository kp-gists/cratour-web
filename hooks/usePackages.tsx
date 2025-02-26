import { useQuery } from '@tanstack/react-query';
import { fetchAllPackages, fetchPackageDetailsBySlug } from '@/lib/query/tour-packages';
import { Pagination } from '@/types/common';
import { useEffect, useState } from 'react';

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

export function useGetTourPackage(slug: string) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const query = useQuery({
		queryKey: ['qk_package', slug],
		queryFn: () => fetchPackageDetailsBySlug(slug),
		enabled: isClient && !!slug, // ✅ Fetch only on client & when slug exists
	});

	return {
		tourPackage: query.data,
		loadingTour: query.isLoading,
		isErrorTour: query.isError,
		errorTour: query.error,
		refetchTour: query.refetch,
	};
}
