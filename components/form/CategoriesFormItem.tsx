'use client';

import { useGetAllCategories } from '@/hooks/useCategories';
import { Select, Spin } from 'antd';
import React from 'react';
type CategoriesFormItemProps = {
	value?: string[];
	onChange?: (val: string[]) => void;
};

const CategoriesFormItem = (props: CategoriesFormItemProps) => {
	const { categories, loadingCategories, isErrorCategories } = useGetAllCategories({ page: 1, pageSize: 50, sort: 'asc' });

	if (loadingCategories || !categories.data.length) return <Spin />;

	if (isErrorCategories) return <>{/* TODO alternative categories */}</>;

	const items = categories.data.map((item: any) => {
		return {
			value: item.slug,
			label: item.title ? item.title : item.name,
		};
	});

	return (
		<Select
			showSearch
			placeholder='Select a category'
			filterOption={(input, option: any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
			options={items}
			onChange={(category) => {
				if (props.onChange) {
					return props.onChange(category);
				}
			}}
			className='w-[300px]'
			mode='multiple'
			allowClear
		/>
	);
};

export default CategoriesFormItem;
