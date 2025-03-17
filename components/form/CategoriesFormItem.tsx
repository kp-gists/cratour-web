'use client';

import { useGetAllCategories } from '@/hooks/useCategories';
import { Checkbox, Spin } from 'antd';
import React from 'react';

type Props = {
	// TODO remove if not used
	place: 'home' | 'page';
};

const CategoriesFormItem = ({ place }: Props) => {
	const { categories, loadingCategories, isErrorCategories } = useGetAllCategories({ page: 1, pageSize: 50, sort: 'asc' });
	if (loadingCategories) return <Spin />;

	if (isErrorCategories) return <>{/* TODO alternative categories */}</>;
	return (
		<>
			{categories.data.map((cat: any) => (
				// TODO add the types for each of any fields
				<Checkbox key={cat.slug} value={cat.slug}>
					{cat.title}
				</Checkbox>
			))}
		</>
	);
};

export default CategoriesFormItem;
