import { useQuery } from '@tanstack/react-query';
import { fetchAllPackages, fetchPackage } from '@/lib/query/tour-packages';

export const useGetAllPackages = () => {
	const {
		data: packages,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_packages'],
		queryFn: fetchAllPackages,
	});
	return {
		packages,
		isLoading,
		isError,
		error,
		refetch,
	};
};

export const useGetPackage = (id: string) => {
	const {
		data: tourPackage,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_package'],
		queryFn: () => fetchPackage(id),
	});
	return {
		tourPackage,
		isLoading,
		isError,
		error,
		refetch,
	};
};
