import { ChevronDown } from 'lucide-react';

const tirana = {
	slug: 'tirana-airport',
	title: 'Tirana Airport',
};
export default function CitySelect({ cities, selectedCity, onChange }: { cities: any[]; selectedCity: string; onChange: (val: string) => void }) {
	return (
		<div className='relative w-64'>
			<select
				value={selectedCity || 'default'}
				onChange={(e) => onChange(e.target.value)}
				className='w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
			>
				<option value='default' hidden>
					Select a city
				</option>
				{[tirana, ...cities].map((city) => (
					<option key={city.slug} value={city.slug}>
						{city.title}
					</option>
				))}
			</select>
			<div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
				<ChevronDown />
			</div>
		</div>
	);
}
