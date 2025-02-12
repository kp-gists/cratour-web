'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { DatePickerDemo } from './ui/DatePicker';
import Image from 'next/image';
import { images } from '@/constants/images';
import useHash from '@/hooks/useHash';
import { ToastContainer, toast } from 'react-toastify';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { createWhatsappHref } from '@/lib/whatsapp';
import { contacts } from '@/constants/contacts';

const formSchema = z.object({
	email: z.string().email('Invalid email address'),
	adults: z.number().int().min(1, 'At least one person is required'),
	children: z.number().int().min(0).optional(),
	stops: z.number().int().min(1).optional(),
	baggages: z.number().int().min(0, 'Baggage count cannot be negative'),
	pickUpDate: z.date({ required_error: 'Pickup date is required' }),
	returnDate: z.date().optional(),
	notes: z.string().optional(),
	pickUpPlace: z.string().min(1, 'Where should I pick you up?'),
	dropOffPlace: z.string().min(1, 'Where do I drop you?'),
	carType: z.enum(['sedan', 'suv', 'van-minivan', 'minibus', 'bus']).optional(),
	serviceType: z.enum(['hourly', 'direct']).optional(),
	language: z.enum(['english', 'turkish', 'italian', 'albanian']).optional(),
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
	const [mode, setMode] = useState<'email' | 'whatsapp'>('email');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(formSchema),
	});

	const {
		formState: { errors },
		register,
		handleSubmit,
	} = form;
	console.log({ errors });
	// Ref to store the first error field
	const errorRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// If there are errors, scroll to the first one
		const firstErrorField = Object.keys(errors)[Object.keys(errors).length - 1];
		if (firstErrorField) {
			const errorElement = document.getElementById(firstErrorField);
			if (errorElement) {
				errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
				errorElement.focus(); // Optional: Focus on the input field
			}
		}
	}, [errors]);

	const onSubmit = (data: FormData) => {
		console.log(data);
		const message = `Pershendetje, I would like to request a price for a transfer.
Here are my details:
- **Email:** ${data.email}
- **Passengers:** ${data.adults} Adults, ${data.children} Children
- **Baggages:** ${data.baggages}
- **Pick-Up Date:** ${data.pickUpDate ? data.pickUpDate.toDateString() : 'Not specified'}
- **Return Date:** ${data.returnDate ? data.returnDate.toDateString() : 'Not specified'}
- **Pick-Up Location:** ${data.pickUpPlace}
- **Additional Stops:** ${data.stops}
- **Drop-Off Location:** ${data.dropOffPlace}
- **Car Type:** ${data.carType ? data.carType : 'Not specified'}
- **Preferred Language:** ${data.language ? data.language : 'English'}
- **Additional Notes:** ${data.notes ? data.notes : 'No additional notes'}
Please provide me with the pricing details. Looking forward to your response. Thank you!`;

		if (mode === 'whatsapp') {
			console.log('send on whatsapp');
			setIsLoading(true);

			const text = encodeURIComponent(message);
			const ref = createWhatsappHref(contacts.whatsapp.telNr, text);
			router.push(ref, {});
			setIsLoading(false);
		} else {
			console.log({ mode });
			const notes = `<div>
    <div>
			<p><strong>**Email:</strong> ${data.email}</p>
			<p><strong>**Passengers:</strong> ${data.adults} Adults, ${data.children} Children</p>
			<p><strong>**Baggages:</strong> ${data.baggages}</p>
			<p><strong>**Pick-Up Date:</strong> ${data.pickUpDate ? data.pickUpDate.toDateString() : 'Not specified'}</p>
			<p><strong>**Return Date:</strong> ${data.returnDate ? data.returnDate.toDateString() : 'Not specified'}</p>
			<p><strong>**Pick-Up Location:</strong> ${data.pickUpPlace}</p>
			<p><strong>**Additional Stops:</strong> ${data.stops}</p>
			<p><strong>**Drop-Off Location:</strong>  ${data.dropOffPlace}</p>
			<p><strong>**Car Type:</strong>  ${data.carType ? data.carType : 'Not specified'}</p>
			<p><strong>**Preferred Language:</strong> ${data.language ? data.language : 'English'}</p>
			<p><strong>**Additional Notes:</strong> ${data.notes ? data.notes : 'No additional notes'}</p>
		</div>
    <h5>Please provide me with the pricing details. Looking forward to your response. Thank you!</h5>
    </div>`;
			const bodyData = {
				subject: 'I would like to request a price for a transfer',
				serviceType: 'transfer',
				email: data.email,
				notes: notes,
			};
			fetch('/api/emails', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(bodyData),
			})
				.then((res) => {
					console.log('🚀 ~ .then ~ res:', res);
					return res.json();
				})
				.then((d: any) => {
					console.log('🚀 ~ .then ~ d:', d);
					toast.success('Message was sent, check your email inbox for any the response of your request');
				})
				.catch((error) => {
					console.log('🚀 ~ handleSubmit ~ error:', error);
					toast.error('Sorry! Message was not sent!');
				})
				.finally(() => setIsLoading(false));
		}
	};

	return (
		<div className=' w-full max-w-2xl mx-auto'>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit as any)} className='flex flex-col items-center gap-4'>
					<div id='pickup' className='p-5 w-[360px] md:w-fit'>
						<div
							className={cn(
								' w-full flex border-2  border-dashed p-5 flex-col rounded-lg relative  justify-start items-start mb-4 gap-6 md:gap-8',
								hash === 'pickup' ? ' border-blue-500 ' : '',
							)}
						>
							<div
								className={cn(
									'rounded-xl bg-blue-50 border px-2 py-0.5  text-center absolute -top-[14px] left-3 text-sm',
									hash === 'extra' ? ' border-blue-500 text-blue-500 ' : '',
								)}
							>
								Where is your Transfer to?
							</div>
							<div className='flex flex-col md:flex-row  justify-center items-center md:items-end gap-4'>
								<FormField
									control={form.control}
									name='pickUpPlace'
									render={({ field }) => (
										<FormItem className='flex flex-col gap-2 w-fit md:w-[320px]' ref={errors.pickUpPlace ? errorRef : null}>
											<FormLabel className='font-semibold font-sans'>Pick Up: </FormLabel>
											<FormControl>
												<Input id='pickUpPlace' {...field} placeholder='From' onChange={field.onChange} value={field.value} style={{ width: 260 }} />
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
												<Input id='dropOffPlace' {...field} placeholder='To' onChange={field.onChange} value={field.value} style={{ width: 260 }} />
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

					<div id='cartype' className='p-5 w-[360px] md:w-fit'>
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

					<div id='extra' className='p-5 w-[360px] md:w-fit'>
						<div className={cn('p-5 border-2 rounded-lg w-fit  border-dashed relative', hash === 'extra' ? ' border-blue-500 ' : '')}>
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
							<div className='flex flex-col w-fit gap-6 md:gap-10 '>
								{/* Email */}
								<div className='flex flex-col md:flex-row  gap-6 md:gap-10 items-center md:items-end w-fit'>
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
														style={{ width: 260 }}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='stops'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='font-semibold font-sans flex items-center gap-2'>
													<Image src={images.pinPlus} alt='notes' width={24} height={24} />
													Stops{' '}
												</FormLabel>
												<FormControl>
													<Input type='number' {...field} onChange={(e) => field.onChange(Number(e.target.value) as any)} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className='flex flex-col gap-4 md:flex-row items-center justify-center'>
									{/* People */}
									<FormField
										control={form.control}
										name='adults'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='font-semibold font-sans flex items-center gap-2'>
													<Image src={images.people} alt='notes' width={24} height={24} />
													Adults{' '}
												</FormLabel>
												<FormControl>
													<Input type='number' {...field} onChange={(e) => field.onChange(Number(e.target.value) as any)} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='children'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='font-semibold font-sans flex items-center gap-2'>
													<Image src={images.people} alt='notes' width={24} height={24} />
													Children{' '}
												</FormLabel>
												<FormControl>
													<Input type='number' {...field} onChange={(e) => field.onChange(Number(e.target.value) as any)} />
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
													Nr. Baggages
												</FormLabel>
												<FormControl>
													<Input type='number' {...field} onChange={(e) => field.onChange(Number(e.target.value) as any)} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
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
												<Textarea {...field} rows={4} placeholder='Additional notes (optional)' className='w-fit md:w-[400px]' />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
					</div>
					{/* Submit Button */}
					<div className='flex w-full flex-col md:flex-row gap-4 justify-center md:justify-around items-center px-10 '>
						<Button
							disabled={isLoading}
							type='submit'
							size={'lg'}
							variant={'form'}
							onClick={() => setMode('email')}
							className='flex flex-row gap-2 items-center'
						>
							Send Request
							<Image src={images.send} alt='notes' width={24} height={24} />
						</Button>
						<Button
							type='submit'
							disabled={isLoading}
							onClick={() => setMode('whatsapp')}
							size={'lg'}
							variant={'form'}
							className='flex flex-row gap-2 text-green-500 items-center border-green-500 hover:text-white hover:bg-green-400 hover:border-green-300'
						>
							Continue to Whatsapp
						</Button>
					</div>
				</form>
			</Form>
			<ToastContainer />
		</div>
	);
};

export default TransferForm;
