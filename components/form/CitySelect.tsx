import { ChevronDown } from 'lucide-react';
import { Select } from 'antd';

const tirana = {
	slug: 'tirana-airport',
	title: 'Tirana Airport',
};
export default function CitySelect({
	cities,
	selectedCity,
	onChange,
	mode = 'single',
}: {
	cities: any[];
	selectedCity: string;
	onChange: (val: string) => void;
	mode?: 'single' | 'multiple';
}) {
	const items = cities.map((item) => {
		return {
			value: item.slug,
			label: item.title ? item.title : item.name,
		};
	});
	if (mode == 'single') {
		return (
			<Select
				showSearch
				placeholder='Select a Place'
				filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
				options={items}
				onSelect={(place) => onChange(place)}
				className='w-[256px]'
				allowClear
			/>
		);
	}

	return (
		<Select
			showSearch
			placeholder='Select a Place'
			filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
			options={items}
			onSelect={(place) => onChange(place)}
			className='w-[256px]'
			mode='multiple'
			allowClear
		/>
	);
}
