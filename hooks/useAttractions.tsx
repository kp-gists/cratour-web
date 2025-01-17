import { useQuery } from '@tanstack/react-query';
import { fetchAllAttractions, fetchAttraction } from '@/lib/query/attractions';

export const useGetAllAttractions = () => {
	const {
		data: attractions,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_attractions'],
		queryFn: fetchAllAttractions,
	});
	return {
		attractions,
		isLoading,
		isError,
		error,
		refetch,
	};
};

export const useGetAttraction = (id: string) => {
	const {
		data: attraction,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_attraction'],
		queryFn: () => fetchAttraction(id),
	});
	return {
		attraction,
		isLoading,
		isError,
		error,
		refetch,
	};
};
