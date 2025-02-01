'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { DatePickerDemo } from './ui/DatePicker';
import Image from 'next/image';

const formSchema = z.object({
	fullName: z.string().min(1, 'Full name is required'),
	email: z.string().email('Invalid email address'),
	people: z.number().int().min(1, 'At least one person is required'),
	baggages: z.number().int().min(0, 'Baggage count cannot be negative'),
	pickUp: z.date({ required_error: 'Pickup date is required' }),
	returnDate: z.date({ required_error: 'Return date is required' }),
	notes: z.string().optional(),
	carType: z.enum(['style', 'comfort', 'style-comfort', 'extra-comfort', 'super-comfort']).optional(),
	stops: z.number().optional(),
	travelTimeDisponibile: z.number().min(0, 'Travel time cannot be negative').optional(),
	isDriverWaiting: z.boolean().default(false).optional(),
});

type FormData = z.infer<typeof formSchema>;

const cars = [
	{ value: 'style', label: 'Style', icon: '/png/car1.png' },
	{ value: 'comfort', label: 'Comfort', icon: '/png/car2.png' },
	{ value: 'style-comfort', label: 'Style & Comfort', icon: '/png/car3.png' },
	{ value: 'extra-comfort', label: 'Extra Comfort', icon: '/png/car4.png' },
	{ value: 'super-comfort', label: 'Super Comfort', icon: '/png/car5.png' },
];

const TransferForm = () => {
	const form = useForm({
		resolver: zodResolver(formSchema),
	});

	const {
		formState: { errors },
		register,
		handleSubmit,
	} = form;

	const onSubmit = (data: FormData) => {
		console.log(data);
		const pickDate = data.pickUp.toLocaleDateString('sq', {
			year: 'numeric', // Example: "2025"
			day: 'numeric', // Example: "16"
			month: 'long', // Example: "January"
		});
		const returnDate = data.returnDate.toLocaleDateString('sq', {
			year: 'numeric', // Example: "2025"
			day: 'numeric', // Example: "16"
			month: 'long', // Example: "January"
		});
	};
	return (
		<div className='flex flex-wrap w-full'>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit as any)} className='flex flex-col items-center gap-4'>
					<div className='flex flex-wrap w-full gap-6 md:gap-10'>
						{/* Full Name */}
						<FormField
							control={form.control}
							name='fullName'
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel>Full Name: </FormLabel>
									<FormControl>
										<Input id='fullName' {...register('fullName')} placeholder='Enter your full name' onChange={field.onChange} value={field.value} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Email */}
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel>Email: </FormLabel>
									<FormControl>
										<Input id='email' {...register('email')} placeholder='Enter your email' type='email' onChange={field.onChange} value={field.value} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className='flex flex-col md:flex-row  gap-6 md:gap-10 items-start md:items-end'>
							{/* People */}
							<FormField
								control={form.control}
								name='people'
								render={({ field }) => (
									<FormItem>
										<FormLabel> Number of People </FormLabel>
										<FormControl>
											<Input type='number' {...field} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : undefined)} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Number of Baggages */}
							<FormField
								control={form.control}
								name='baggages'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Number of Baggages</FormLabel>
										<FormControl>
											<Input
												type='number'
												{...field}
												onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : undefined)}
												placeholder='Enter number of baggages'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Is Driver Waiting */}
							<FormField
								control={form.control}
								name='isDriverWaiting'
								render={({ field }) => (
									<FormItem className='flex flex-row items-center gap-4'>
										<FormLabel>Is the driver waiting?</FormLabel>
										<FormControl>
											<div className='flex items-center space-x-2'>
												<Checkbox id='isDriverWaiting' checked={field.value} onCheckedChange={(checked) => field.onChange(checked)} />
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className='flex flex-row gap-4 md:gap-6'>
							{/* Pickup Date */}
							<FormField
								control={form.control}
								name='pickUp'
								render={({ field }) => (
									<FormItem className='flex flex-col gap-2'>
										<FormLabel>Pickup Date: </FormLabel>
										<FormControl>
											<DatePickerDemo selected={field.value} onChange={field.onChange} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Return Date */}
							<FormField
								control={form.control}
								name='returnDate'
								render={({ field }) => (
									<FormItem className='flex flex-col gap-2'>
										<FormLabel>Return Date: </FormLabel>
										<FormControl>
											<DatePickerDemo selected={field.value} onChange={field.onChange} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Car Type  //TODO make it with icons better*/}
						<FormField
							control={form.control}
							name='carType'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Car Type</FormLabel>
									<FormControl>
										<div className='flex flex-wrap gap-4 lg:gap-6'>
											{cars.map((option) => (
												<div
													key={option.value}
													onClick={() => field.onChange(option.value)}
													className={`flex min-w-[110px] flex-col justify-center items-center gap-1 py-3 px-4 border rounded-lg cursor-pointer ${
														field.value === option.value ? 'border-green-500 bg-green-100' : 'border-gray-300 hover:border-gray-400'
													}`}
												>
													<Image src={option.icon} width={36} height={36} className='h-9 w-9 bg-cover' alt={option.value} />
													<p className='text-sm font-medium'>{option.label}</p>
												</div>
											))}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Notes */}
						<FormField
							control={form.control}
							name='notes'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Notes</FormLabel>
									<FormControl>
										<Textarea {...field} rows={4} placeholder='Additional notes (optional)' className='w-[400px]' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					{/* Submit Button */}
					<Button type='submit' size={'lg'} variant={'form'} className=''>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default TransferForm;
