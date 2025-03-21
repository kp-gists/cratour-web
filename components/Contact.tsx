/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { DatePickerDemo } from './ui/DatePicker';
import SatisfyText from './ui/SatisfyText';

const formSchema = z.object({
	fullName: z.string().min(1, 'Full name is required'),
	email: z.string().email('Invalid email address'),
	passengers: z
		.array(
			z.object({
				type: z.string(),
				count: z.number().min(1, 'At least one passenger is required'),
			}),
		)
		.nonempty('You must add at least one passenger'),
	startDate: z.date({ required_error: 'Start date is required' }),
	endDate: z.date({ required_error: 'End date is required' }),
	notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = (data: FormData) => {
		console.log('Form submitted:', data);
		setIsLoading(true);
		fetch('/api/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log('🚀 ~ .then ~ res:', res);
				return res.json();
			})
			.then((d: any) => {
				console.log('🚀 ~ .then ~ d:', d);
				toast.success('Message was sent!');
			})
			.catch((error) => {
				console.log('🚀 ~ handleSubmit ~ error:', error);
				toast.error('Sorry! Message was not sent!');
			})
			.finally(() => setIsLoading(false));
	};

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: '',
			email: '',
			passengers: [],
			startDate: new Date(),
			endDate: new Date(),
			notes: '',
		},
	});

	// Add a new passenger or increase the count of an existing type
	const addPassenger = (type: string) => {
		const passengers = [...form.getValues('passengers')];
		const index = passengers.findIndex((p) => p.type === type);

		if (index !== -1) {
			passengers[index].count += 1; // Increment the count
		} else {
			passengers.push({ type, count: 1 }); // Add a new passenger type
		}

		form.setValue('passengers', passengers as any);
	};

	// Update the count of a passenger type
	const updatePassengerCount = (index: number, delta: number) => {
		const passengers = [...form.getValues('passengers')];

		passengers[index].count += delta;

		// Remove the passenger type if the count goes to 0
		if (passengers[index].count <= 0) {
			passengers.splice(index, 1);
		}

		form.setValue('passengers', passengers as any);
	};

	// Remove a passenger type entirely
	const removePassenger = (index: number) => {
		const passengers = [...form.getValues('passengers')];
		passengers.splice(index, 1);
		form.setValue('passengers', passengers as any);
	};

	return (
		<div className='flex flex-col gap-4 w-full'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 w-full'>
					<div className='flex flex-col md:flex-row gap-6 md:gap-10 w-full'>
						{/* Full Name */}
						<FormField
							control={form.control}
							name='fullName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Full Name</FormLabel>
									<FormControl>
										<Input placeholder='Enter your full name' {...field} className='w-fit md:min-w-[300px]  lg:min-w-[330px]' />
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
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder='Enter your email' type='email' {...field} className='w-fit md:min-w-[300px]  lg:min-w-[330px]' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name='passengers'
						render={() => (
							<FormItem>
								<FormLabel>Group Passengers</FormLabel>
								<FormControl>
									<div className='flex items-center gap-2'>
										{/* Add Passenger Buttons */}
										<Button type='button' size={'sm'} variant={'secondary'} className='' onClick={() => addPassenger('Adult')}>
											+ Adult
										</Button>
										<Button type='button' size={'sm'} variant={'secondary'} onClick={() => addPassenger('Child')}>
											+ Child
										</Button>
									</div>
								</FormControl>
								<FormMessage />
								<ul className='pt-4 space-y-2 flex flex-row gap-4'>
									{form.watch('passengers').map((p, index) => (
										<li key={index} className='flex items-center justify-between gap-3'>
											<span>{p.type}:</span>
											<div className='flex items-center gap-2'>
												{/* Decrease Count */}
												<Button
													type='button'
													title={`Remove 1 ${p.type}`}
													variant='secondary'
													onClick={() => updatePassengerCount(index, -1)}
													disabled={p.count <= 0}
												>
													-
												</Button>
												{/* Display Count */}
												<span>{p.count}</span>
												{/* Increase Count */}
												<Button type='button' title={`Add 1 ${p.type}`} variant='secondary' onClick={() => updatePassengerCount(index, 1)}>
													+
												</Button>
												{/* Remove Passenger Type */}
												<Button type='button' title={`Remove all `} variant='destructive' onClick={() => removePassenger(index)}>
													X
												</Button>
											</div>
										</li>
									))}
								</ul>
							</FormItem>
						)}
					/>

					<div className='flex flex-col md:flex-row gap-3'>
						{/* Start Date */}
						<FormField
							control={form.control}
							name='startDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Start Date: </FormLabel>
									<FormControl>
										<DatePickerDemo selected={field.value} onChange={field.onChange} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* End Date */}
						<FormField
							control={form.control}
							name='endDate'
							render={({ field }) => (
								<FormItem>
									<FormLabel>End Date: </FormLabel>
									<FormControl>
										<DatePickerDemo selected={field.value} onChange={field.onChange} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* Notes */}
					<FormField
						control={form.control}
						name='notes'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Notes</FormLabel>
								<FormControl>
									<Textarea placeholder='Additional notes (optional)' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Submit Button */}
					<Button type='submit' disabled={isLoading} size={'lg'} className='w-full md:w-fit '>
						<SatisfyText className='text-xl md:text-2xl text-primary-400 '>Start Crafting...</SatisfyText>
					</Button>
				</form>
			</Form>
			<ToastContainer transition={Bounce} autoClose={2000} closeOnClick />
		</div>
	);
};

export default Contact;
