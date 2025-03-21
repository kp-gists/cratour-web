import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchAllPackages, fetchPackageDetailsBySlug, fetchAllPackagesInfinite, fetchPackageDetailsById } from '@/lib/query/tour-packages';
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

export const useInfinitePackages = () => {
	const { data, status } = useInfiniteQuery({
		queryKey: ['qk_packages_infinite'],
		queryFn: (props: any) => fetchAllPackagesInfinite(props),
		getNextPageParam: (lastPage) => {
			return lastPage;
		},
		initialPageParam: 1,
	});
	return {
		data,
		status,
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
export function useGetTourPackageById(id: string) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const query = useQuery({
		queryKey: ['qk_package_id', id],
		queryFn: () => fetchPackageDetailsById(id),
		enabled: isClient && !!id, // ✅ Fetch only on client & when id exists
	});

	return {
		tourPackage: query.data,
		loadingTour: query.isLoading,
		isErrorTour: query.isError,
		errorTour: query.error,
		refetchTour: query.refetch,
	};
}
