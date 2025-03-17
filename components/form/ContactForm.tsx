'use client';

import React, { useState } from 'react';
import { Form, Input, InputNumber, Select, Button } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import { useGetAllCities } from '@/hooks/useCities';
import { useGetAllAttractions } from '@/hooks/useAttractions';
import PlaceOptions from './PlaceOptions';
import MultiplePlaceSelect from './PlaceOptions';

const { Option } = Select;
type Props = {
	place?: 'home' | 'page';
};

const ContactForm = ({ place = 'home' }: Props) => {
	const [form] = Form.useForm();
	const [isLoading, setIsLoading] = useState(false);

	const {
		cities,
		isLoading: isLoadingCities,
		isError,
	} = useGetAllCities({
		page: 1,
		pageSize: 1000,
		sort: 'asc',
	});
	const {
		attractions,
		isLoading: isLoadingAttractions,
		isError: isErrorAttraction,
	} = useGetAllAttractions({
		page: 1,
		pageSize: 1000,
		sort: 'asc',
	});

	const onFinish = (data: any) => {
		const placesList = data.places.map((place: string) => `<li>${place}</li>`).join('');
		const notes = `<div>
            <div>
              <p><strong>**Full Name:</strong> ${data.subject}</p>
              <p><strong>**Full Name:</strong> ${data.fullName}</p>
              <p><strong>**Phone:</strong> ${data.phone}</p>
              <p><strong>**People:</strong> ${data.group}</p>
							<p><strong>**Places:</strong></p>
								<ol>${placesList}</ol>
              <p><strong>**Additional Notes:</strong> ${data.message}</p>

            </div>
            <h5>Please provide me with the pricing details. Looking forward to your response. Thank you!</h5>
            </div>`;
		const bodyData = {
			subject: data.fullName + ' requested some info about: ' + data.service,
			serviceType: data.service,
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
				return res.json();
			})
			.then(() => {
				toast.success('Message was sent, check your email inbox for any the response of your request');
			})
			.catch((error) => {
				console.log('🚀 ~ handleSubmit ~ error:', error);
				toast.error('Sorry! Message was not sent!');
			})
			.finally(() => {
				setIsLoading(false);
				form.resetFields();
			});
	};

	return (
		<div className=' flex flex-col md:flex-row justify-center items-center gap-3 mt-16 w-full mx-auto max-w-[1200px]'>
			<div>
				<h1>Contact Us</h1>
			</div>
			<div>
				<Form
					form={form}
					layout='horizontal'
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 12 }}
					className='w-fit  md:w-[600px] gap-3'
					onFinish={onFinish}
					initialValues={{ group: 1 }}
				>
					{/* Name & Surname */}
					<Form.Item label={<label className=' '>Name & Surname</label>} name='fullName' rules={[{ required: true, message: 'Please enter your full name' }]}>
						<Input placeholder='Enter your name and surname' />
					</Form.Item>

					{/* Email */}
					<Form.Item
						label={<label className=' '>Your Email</label>}
						name='email'
						rules={[
							{ required: true, message: 'Please enter your email' },
							{ type: 'email', message: 'Enter a valid email' },
						]}
					>
						<Input placeholder='Enter your email' />
					</Form.Item>

					{/* Phone (Optional) */}
					<Form.Item label={<label className=' '>Phone</label>} name='phone'>
						<Input placeholder='Enter your phone number' />
					</Form.Item>

					{/* Subject (Optional) */}
					<Form.Item label={<label className=' '>Subject</label>} name='subject'>
						<Input placeholder='Enter the subject' />
					</Form.Item>

					{/* Number of People */}
					<Form.Item
						label={<label className='  '>Number of People</label>}
						name='group'
						rules={[{ required: true, message: 'Please enter the number of people' }]}
					>
						<InputNumber min={1} max={100} />
					</Form.Item>

					{/* City (Multi-Select) */}
					<Form.Item
						label={<label className=' '>City/Attraction</label>}
						name='places'
						rules={[{ required: true, message: 'Please select at least one place' }]}
					>
						{/* todo multiselect cities and attractions */}
						<MultiplePlaceSelect
							attractions={attractions}
							cities={cities}
							isError={isError || isErrorAttraction}
							loading={isLoadingAttractions || isLoadingCities}
						/>
					</Form.Item>

					{/* Service */}
					<Form.Item label='Service' name='service' rules={[{ required: true, message: 'Please select a service' }]}>
						<Select placeholder='Select a service'>
							<Option value='tour'>Tour Package</Option>
							<Option value='transport'>Transfers</Option>
							<Option value='car-rental'>Car Rental</Option>
							<Option value='hotel'>Hotel Booking</Option>
						</Select>
					</Form.Item>

					{/* Message */}
					<Form.Item label='Message' name='message' rules={[{ required: true, message: 'Please enter your message' }]}>
						<Input.TextArea rows={4} placeholder='Enter your message...' />
					</Form.Item>

					{/* Submit Button */}
					<Form.Item className='flex justify-end'>
						<Button disabled={isLoading} loading={isLoading} type='primary' htmlType='submit'>
							Send a message
						</Button>
					</Form.Item>
				</Form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ContactForm;
