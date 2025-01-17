import { useQuery } from '@tanstack/react-query';
import { fetchActivity, fetchAllActivities } from '@/lib/query/tour-activities';

export const useGetAllActivities = () => {
	const {
		data: activities,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_activities'],
		queryFn: fetchAllActivities,
	});
	return {
		activities,
		isLoading,
		isError,
		error,
		refetch,
	};
};

export const useGetActivity = (id: string) => {
	const {
		data: city,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_activity'],
		queryFn: () => fetchActivity(id),
	});
	return {
		city,
		isLoading,
		isError,
		error,
		refetch,
	};
};
