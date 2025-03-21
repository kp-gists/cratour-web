'use client';

import { craftForm } from '@/constants/craftForm';
import React, { useState } from 'react';
import { Form, Input, Checkbox, Select, DatePicker, Button, message } from 'antd';
import { Bounce, toast, ToastContainer } from 'react-toastify';

import CategoriesFormItem from './CategoriesFormItem';

const { Option } = Select;

type Props = {
	lang?: LanguageKeys;
	onClose: () => void;
};
type LanguageKeys = keyof typeof craftForm;
const label = (text: string) => <label className='text-base font-semibold'>{text}</label>;

// Todo language
const CraftTourForm = ({ lang = 'english', onClose }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Message was sent, check your email inbox for any the response!',
		});
	};

	const errorMessage = () => {
		messageApi.open({
			type: 'error',
			content: 'Sorry! Message was not sent!',
		});
	};

	const [form] = Form.useForm();

	const onFinish = (data: any) => {
		setIsLoading(true);
		const accommodation = data.accommodation.map((item: string) => `<li>${item}</li>`).join('');
		const activities = data.activities.map((item: string) => `<li>${item}</li>`).join('');
		const tourCategory = data.tourCategory.map((item: string) => `<li>${item}</li>`).join('');
		const travelDates = data.travelDates
			.map((item: string) => {
				const itemDate = new Date(item);

				return `<li>${itemDate.toLocaleDateString()}</li>`;
			})
			.join('');
		const notes = `<div>
						<div>
							<p><strong>**Subject:</strong> Crafting my own trip to albania </p>
							<p><strong>**Full Name:</strong> ${data.fullName}</p>
							<p><strong>**Tour Guide:</strong> ${data.tourGuide}</p>
							<p><strong>**GuideLanguage:</strong> ${data.guideLanguage ? data.guideLanguage : 'English default'}</p>
							<p><strong>**Contact Method:</strong> ${data.contactMethod}</p>
							<p><strong>**Phone:</strong> ${data.phone ? data.phone : ''}</p>
							<p><strong>**GroupSize:</strong> ${data.groupSize}</p>
							<p><strong>**Meals:</strong> ${data.meals}</p>
							<p><strong>**accommodation:</strong></p>
								<ol>${accommodation}</ol>
							<p><strong>**activities:</strong></p>
								<ol>${activities}</ol>
							<p><strong>**Tour Category:</strong></p>
								<ol>${tourCategory}</ol>
							<p><strong>**Tour Travel Dates:</strong></p>
								<ul>${travelDates}</ul>
							<p><strong>**Special Preferences:</strong> ${data.specialPreferences}</p>
							<p><strong>**Additional Accommodation:</strong> ${data.additionalAccommodations}</p>

						</div>
						<h5>Please provide me with the pricing details. Looking forward to your response. Thank you!</h5>
						</div>`;
		const bodyData = {
			subject: data.fullName + ' requested some info about crafting a tour package',
			serviceType: 'tour-package',
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
				form.resetFields();
				success();
			})
			.catch((error) => {
				console.log('🚀 ~ handleSubmit ~ error:', error);
				errorMessage();
			})
			.finally(() => {
				setIsLoading(false);
				form.resetFields();
				onClose();
			});
	};

	return (
		<div className='max-w-full md:max-w-[800px] mx-auto'>
			<Form layout='vertical' onFinish={onFinish} form={form}>
				{/* Full Name */}
				<div className='flex flex-col md:flex-row md:gap-6 gap-3'>
					<Form.Item label={label('Full Name')} name='fullName' rules={[{ required: true, message: 'Full Name is required' }]}>
						<Input placeholder='Enter your full name' />
					</Form.Item>

					{/* Email Address */}
					<Form.Item
						label={label('Email Address')}
						name='email'
						rules={[
							{ required: true, message: 'Email is required' },
							{ type: 'email', message: 'Enter a valid email' },
						]}
					>
						<Input placeholder='Enter your email address' />
					</Form.Item>
					{/* Phone Number */}
					<Form.Item label={label('Phone Number')} name='phone'>
						<Input placeholder='Enter your phone number' />
					</Form.Item>
				</div>

				<Form.Item
					dependencies={[]}
					label={label('Tour Category of Interest')}
					name='tourCategory'
					rules={[{ required: true, message: 'Categories required' }]}
				>
					<CategoriesFormItem />
				</Form.Item>

				<div className='flex flex-col md:flex-row gap-3 w-full'>
					{/* Tour Category of Interest */}

					{/* Number of People in Your Group */}
					<Form.Item label={label('Number of People in Your Group')} name='groupSize'>
						<Select placeholder='Select group size'>
							<Option value='1-4'>1-4 people</Option>
							<Option value='3-5'>3-5 people</Option>
							<Option value='6-9'>6-9 people</Option>
							<Option value='10+'>More than 10 people</Option>
						</Select>
					</Form.Item>

					<Form.Item label={label('Would you like meals to be included?')} name='meals'>
						<Select placeholder='Select a option'>
							<Option value='yes'>Yes, I want meals included (breakfast, lunch, dinner)</Option>
							<Option value='no'>No, I do not prefer meals to be included</Option>
						</Select>
					</Form.Item>
				</div>

				{/* Meals Included */}

				{/* Accommodation Preference */}
				<Form.Item
					label={label('Accommodation Preference')}
					name='accommodation'
					rules={[
						{
							required: true,
							message: 'Select at least one!',
						},
					]}
				>
					<Checkbox.Group>
						<Checkbox value='hotels'>Hotels</Checkbox>
						<Checkbox value='guesthouses'>Guesthouses</Checkbox>
						<Checkbox value='inns'>Inns</Checkbox>
						<Checkbox value='bedAndBreakfast'>Bed & Breakfast</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				{/* Preferred Transportation */}

				{/* Tour Guide */}
				<div className='flex gap-3 md:gap-6 items-end flex-col md:flex-row'>
					<Form.Item label={label('Do you need a tour guide?')} name='tourGuide'>
						<Select placeholder='Select a option'>
							<Option value='yes'>Yes!</Option>
							<Option value='no'>No, we are good.</Option>
						</Select>
					</Form.Item>

					<Form.Item label={label('Preferred Transportation')} name='transportation'>
						<Select placeholder='Select a option'>
							<Option value='privateTransfer'>Private transfer from airport/hotel</Option>
							<Option value='privateCar'>Private car (SUV)</Option>
							<Option value='minibus'>Minibus or coach</Option>
						</Select>
					</Form.Item>

					{/* Preferred Language for the Tour Guide */}
					<Form.Item className='w-[240px]' label={label('Preferred Language')} name='guideLanguage'>
						<Select placeholder='Select a language'>
							<Option value='english'>English</Option>
							<Option value='albanian'>Shqip</Option>
							<Option value='turkish'>Türkçe</Option>
							<Option value='italian'>Italiano</Option>
						</Select>
					</Form.Item>
				</div>

				{/* Activities Included */}
				<Form.Item
					label={label('Activities You Want:')}
					name='activities'
					rules={[
						{
							required: true,
							message: 'Select at least one!',
						},
					]}
				>
					<Checkbox.Group>
						<Checkbox value='boatTour'>Boat tour</Checkbox>
						<Checkbox value='hiking'>Hiking</Checkbox>
						<Checkbox value='culturalEvents'>Cultural events</Checkbox>
						<Checkbox value='foodWineTasting'>Food or wine tasting</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				<div className='flex gap-3 md:gap-6 flex-col md:flex-row'>
					{/* Preferred Method of Contact */}
					<Form.Item label={label('Preferred Method of Contact')} name='contactMethod'>
						<Select placeholder='Select a Contact' style={{ width: 200 }}>
							<Option value='email'>By email</Option>
							<Option value='phone'>By phone</Option>
						</Select>
					</Form.Item>

					{/* Desired Travel Dates */}
					<Form.Item label='Desired Travel Dates' name='travelDates' rules={[{ required: true, message: 'Travel Dates are required' }]}>
						<DatePicker.RangePicker />
					</Form.Item>
				</div>

				{/* Additional Accommodations */}
				<Form.Item label='Any additional accommodations you need (optional)' name='additionalAccommodations'>
					<Input.TextArea rows={3} placeholder='Enter any additional accommodation requests' />
				</Form.Item>

				{/* Special Preferences */}
				<Form.Item label='Special preferences or other questions (optional)' name='specialPreferences'>
					<Input.TextArea rows={3} placeholder='Enter your special preferences or questions' />
				</Form.Item>

				{/* Submit Button */}
				<Form.Item className='border-t-2 border-gray-300 pt-4'>
					<div className='flex flex-col md:flex-row justify-center gap-6'>
						<Button loading={isLoading} disabled={isLoading} htmlType='button' className='w-full md:w-[300px]' onClick={onClose}>
							Cancel
						</Button>
						<Button type='primary' loading={isLoading} disabled={isLoading} className='w-full md:w-[400px]' htmlType='submit'>
							Submit
						</Button>
					</div>
				</Form.Item>
			</Form>
			{contextHolder}
		</div>
	);
};

export default CraftTourForm;
