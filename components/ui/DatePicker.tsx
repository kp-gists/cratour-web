'use client';

import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function DatePickerDemo({ selected, onChange }: { selected?: Date; onChange: any }) {
	const formatDate = (date: Date) => {
		return date.toLocaleDateString(undefined, {
			weekday: 'long', // Example: "Thursday"
			year: 'numeric', // Example: "2025"
			month: 'long', // Example: "January"
			day: 'numeric', // Example: "16"
		});
	};
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant={'outline'} className={cn('w-[280px] justify-start text-left font-normal', !selected && 'text-muted-foreground')}>
					<CalendarIcon className='mr-2 h-4 w-4' />
					{selected ? formatDate(selected) : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar mode='single' selected={selected} onSelect={onChange} initialFocus />
			</PopoverContent>
		</Popover>
	);
}
