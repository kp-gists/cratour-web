'use client';

import { Select, Spin, Tag } from 'antd';
import Image from 'next/image';
import React from 'react';

const { Option } = Select;

type Props = {
	cities: any;
	attractions: any;
	loading: boolean;
	isError: boolean;
	value?: string[]; // Make value optional for controlled component
	onChange?: (value: string[]) => void;
};

const MultiplePlaceSelect = ({ cities, attractions, isError, loading, value, onChange }: Props) => {
	if (loading) return <Spin />;
	if (isError) return <Tag color='red'>Something went wrong please write the place in the message box</Tag>;

	const items = [...cities.data, ...attractions.data].map((item) => {
		return {
			value: item.slug,
			label: item.title ? item.title : item.name,
			url: item.cover.url,
		};
	});

	return (
		<Select
			mode='multiple'
			value={value} // Ensure it's controlled
			onChange={onChange}
			placeholder='Select Places'
		>
			{items.map((item: any) => (
				<Option key={item.value} value={item.value}>
					<div className='flex flex-row gap-2'>
						<Image src={item.url} alt='' width={24} height={24} className='h-6 w-6 rounded' />

						<p>{item.label}</p>
					</div>
				</Option>
			))}
		</Select>
	);
};

export default MultiplePlaceSelect;
