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
import { images } from '@/constants/images';
import { usePathname } from 'next/navigation';
import useHash from '@/hooks/useHash';
import { cn } from '@/lib/utils';

const formSchema = z.object({
	email: z.string().email('Invalid email address'),
	people: z.number().int().min(1, 'At least one person is required'),
	baggages: z.number().int().min(0, 'Baggage count cannot be negative'),
	pickUpDate: z.date({ required_error: 'Pickup date is required' }),
	returnDate: z.date().optional(),
	notes: z.string().optional(),
	pickUpPlace: z.string().min(1, 'Where should I pick you up?'),
	dropOffPlace: z.string().min(1, 'Where do I drop you?'),
	carType: z.enum(['style', 'comfort', 'style-comfort', 'extra-comfort', 'super-comfort']).optional(),
	serviceType: z.enum(['hourly', 'direct']).optional(),
	language: z.enum(['english', 'turkish', 'italian', 'albanian']).optional(),
	stops: z.number().optional(),
	travelTimeDisponibile: z.number().min(0, 'Travel time cannot be negative').optional(),
});

type FormData = z.infer<typeof formSchema>;

const cars = [
	{ value: 'sedan', label: 'Sedan', icon: '/png/car1.png' },
	{ value: 'suv', label: 'SUV', icon: '/png/car2.png' },
	{ value: 'van-minivan', label: 'Van or Minivan', icon: '/png/minivan.png' },
	{ value: 'minibus', label: 'Minibus', icon: '/png/minibus.png' },
	{ value: 'bus', label: 'Bus', icon: '/png/bus.png' },
];

const languages = [
	{ value: 'english', label: 'English', icon: '/png/en.png' },
	{ value: 'turkish', label: 'Türkçe', icon: '/png/tr.png' },
	{ value: 'italian', label: 'Italiano', icon: '/png/it.png' },
	{ value: 'albanian', label: 'Shqip', icon: '/png/al.png' },
];

const TransferForm = () => {
	const hash = useHash();

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '', // Default empty string for text input
			people: 1, // Default to 1 person
			baggages: 0, // Default to 0 baggages
			pickUpDate: undefined, // No default date
			returnDate: undefined, // Optional date
			notes: '', // Default to empty string
			pickUpPlace: '', // Default empty input
			dropOffPlace: '', // Default empty input
			carType: undefined, // No default selected
			serviceType: undefined, // No default selected
			language: undefined, // No default selected
			stops: 0, // Default to 0 stops
			travelTimeDisponibile: 0, // Default to 0 time available
		},
	});

	const {
		formState: { errors },
		register,
		handleSubmit,
	} = form;

	const onSubmit = (data: FormData) => {
		console.log(data);
		const pickDate = data.pickUpDate.toLocaleDateString('sq', {
			year: 'numeric', // Example: "2025"
			day: 'numeric', // Example: "16"
			month: 'long', // Example: "January"
		});
		const returnDate = data.returnDate
			? data.returnDate.toLocaleDateString('sq', {
					year: 'numeric', // Example: "2025"
					day: 'numeric', // Example: "16"
					month: 'long', // Example: "January"
			  })
			: '';
	};
	return (
		<div className='flex flex-wrap w-full max-w-2xl mx-auto'>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit as any)} className='flex flex-col items-start gap-4'>
					<div id='pickup' className='p-5'>
						<div
							className={cn(
								' w-full flex border-2  border-dashed p-5 flex-col rounded-lg relative  justify-start items-start mb-4 gap-6 md:gap-8',
								hash === 'pickup' ? ' border-blue-500 ' : '',
							)}
						>
							<div
								className={cn(
									'rounded-xl bg-blue-50 border px-2 py-0.5 text-center absolute -top-[14px] left-3 text-sm',
									hash === 'extra' ? ' border-blue-500 text-blue-500 ' : '',
								)}
							>
								Where is your Transfer to?
							</div>
							<div className='flex  justify-center items-end gap-4'>
								<FormField
									control={form.control}
									name='pickUpPlace'
									render={({ field }) => (
										<FormItem className='flex flex-col gap-2 w-[320px]'>
											<FormLabel className='font-semibold font-sans'>Pick Up: </FormLabel>
											<FormControl>
												<Input id='pickUpPlace' {...field} placeholder='From' onChange={field.onChange} value={field.value} style={{ width: 300 }} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Image src={images.exchange} alt='exchange route' width={24} height={24} className='pb-2 rotate-90 md:rotate-0' />
								<FormField
									control={form.control}
									name='dropOffPlace'
									render={({ field }) => (
										<FormItem className='flex flex-col gap-2'>
											<FormLabel className='font-semibold font-sans'>Drop off: </FormLabel>
											<FormControl>
												<Input id='dropOffPlace' {...field} placeholder='To' onChange={field.onChange} value={field.value} style={{ width: 300 }} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='flex flex-col md:flex-row gap-4 md:gap-6'>
								{/* Pickup Date */}
								<FormField
									control={form.control}
									name='pickUpDate'
									render={({ field }) => (
										<FormItem className='flex flex-col gap-2'>
											<FormLabel className='font-semibold font-sans flex items-center gap-2'>
												<Image src={images.calendar} alt='notes' width={24} height={24} />
												Pickup Date:{' '}
											</FormLabel>
											<FormControl>
												<DatePickerDemo selected={field.value} onChange={(date) => field.onChange(date)} />
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
										<FormItem className='flex flex-col gap-2 '>
											<FormLabel className='font-semibold font-sans flex items-center gap-2'>
												<Image src={images.calendarLoading} alt='notes' width={24} height={24} className='bg-contain' />
												Return Date (optional){' '}
											</FormLabel>
											<FormControl>
												<DatePickerDemo selected={field.value} onChange={field.onChange} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
					</div>

					<div id='cartype' className='p-5'>
						{/* Car Type  //TODO make it with icons better*/}
						<div
							className={cn(
								'flex border-2 w-full border-dashed p-5 flex-col rounded-lg md:flex-row justify-center md:justify-start items-center md:items-end mb-4 gap-4 relative',
								hash === 'cartype' ? ' border-blue-500 ' : '',
							)}
						>
							<div
								className={cn(
									'rounded-xl bg-blue-50 border px-2 py-0.5 text-center absolute -top-[14px] left-3 text-sm',
									hash === 'cartype' ? ' border-blue-500 text-blue-500 ' : '',
								)}
							>
								Comfort
							</div>
							<FormField
								control={form.control}
								name='carType'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='font-semibold font-sans flex items-center gap-2'>
											<Image src={images.relax} alt='notes' width={24} height={24} className='bg-contain' />
											Select Comfort:
										</FormLabel>
										<FormControl>
											<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-3 md:grid-rows-2 gap-4 lg:grid-rows-1 lg:gap-6 w-fit'>
												{cars.map((option) => (
													<div
														key={option.value}
														onClick={() => field.onChange(option.value)}
														className={`flex min-w-[110px] flex-col justify-center items-center gap-1 py-3 px-4 border rounded-lg cursor-pointer ${
															field.value === option.value ? 'border-green-500 bg-green-100' : 'border-gray-300 hover:border-gray-400'
														}`}
													>
														<Image src={option.icon} width={36} height={36} className='h-9 w-9 bg-cover' alt={option.value} />
														<p className='text-sm font-medium text-center'>{option.label}</p>
													</div>
												))}
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<div id='extra' className='p-5'>
						<div className={cn('p-5 border-2 rounded-lg   border-dashed relative', hash === 'extra' ? ' border-blue-500 ' : '')}>
							{/*  */}
							<div
								className={cn(
									'rounded-xl bg-blue-50 border px-2 py-0.5 text-center absolute -top-[14px] left-3 text-sm',
									hash === 'extra' ? ' border-blue-500 text-blue-500 ' : '',
								)}
							>
								Extra
							</div>
							{/* group extra 3 */}
							<div className='flex flex-col w-full gap-6 md:gap-10 '>
								{/* Email */}
								<div className='flex flex-col md:flex-row  gap-6 md:gap-10 items-start md:items-end'>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem className='flex flex-col '>
												<FormLabel className='font-semibold font-sans flex items-center gap-2'>
													<Image src={images.message} alt='notes' width={24} height={24} />
													Email:{' '}
												</FormLabel>
												<FormControl>
													<Input
														id='email'
														{...register('email')}
														placeholder='your_email@mail.com'
														type='email'
														onChange={field.onChange}
														value={field.value}
														style={{ width: 300 }}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className='flex flex-col gap-4 md:flex-row'>
										{/* People */}
										<FormField
											control={form.control}
											name='people'
											render={({ field }) => (
												<FormItem>
													<FormLabel className='font-semibold font-sans flex items-center gap-2'>
														<Image src={images.people} alt='notes' width={24} height={24} />
														Number of People{' '}
													</FormLabel>
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
													<FormLabel className='font-semibold font-sans flex items-center gap-2'>
														<Image src={images.suitcase} alt='notes' width={24} height={24} />
														Number of Baggages
													</FormLabel>
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
									</div>

									{/* 
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
							/> */}
								</div>

								{/* language */}
								<FormField
									control={form.control}
									name='language'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-semibold font-sans flex items-center gap-2'>
												<Image src={images.languages} alt='notes' width={24} height={24} className='bg-contain' />
												Language:{' '}
											</FormLabel>
											<FormControl>
												<div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 lg:gap-6 w-fit'>
													{languages.map((option) => (
														<div
															key={option.value}
															onClick={() => field.onChange(option.value)}
															className={`flex w-[110px] flex-col justify-center items-center gap-1 py-3 px-4 border rounded-lg cursor-pointer ${
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
											<FormLabel className='font-semibold font-sans flex items-center gap-2'>
												<Image src={images.note} alt='notes' width={24} height={24} />
												Additional Info
											</FormLabel>
											<FormControl>
												<Textarea {...field} rows={4} placeholder='Additional notes (optional)' className='w-[320px] md:w-[400px]' />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
					</div>
					{/* Submit Button */}
					<Button type='submit' id='newEmail' size={'lg'} variant={'form'} className='flex flex-row gap-2 items-center'>
						Request price
						<Image src={images.send} alt='notes' width={24} height={24} />
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default TransferForm;
