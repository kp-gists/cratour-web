'use client';

import { craftForm } from '@/constants/craftForm';
import React from 'react';
import { Form, Input, Checkbox, Select, DatePicker, Button } from 'antd';
import CategoriesFormItem from './CategoriesFormItem';

const { Option } = Select;

type Props = {
	lang?: LanguageKeys;
	onClose: () => void;
};
type LanguageKeys = keyof typeof craftForm;

const CraftTourForm = ({ lang = 'english', onClose }: Props) => {
	const onFinish = (values: any) => {
		console.log('Form Values:', values);
	};
	return (
		<div className='max-w-full md:max-w-[760px] mx-auto'>
			<Form layout='vertical' onFinish={onFinish}>
				{/* Full Name */}
				<Form.Item label='Full Name' name='fullName' rules={[{ required: true, message: 'Full Name is required' }]}>
					<Input placeholder='Enter your full name' />
				</Form.Item>

				{/* Email Address */}
				<Form.Item
					label='Email Address'
					name='email'
					rules={[
						{ required: true, message: 'Email is required' },
						{ type: 'email', message: 'Enter a valid email' },
					]}
				>
					<Input placeholder='Enter your email address' />
				</Form.Item>

				{/* Phone Number */}
				<Form.Item label='Phone Number' name='phone'>
					<Input placeholder='Enter your phone number' />
				</Form.Item>

				{/* Tour Category of Interest */}
				<Form.Item label='Tour Category of Interest' name='tourCategory'>
					<Checkbox.Group>
						<CategoriesFormItem place='home' />
					</Checkbox.Group>
				</Form.Item>

				{/* Number of People in Your Group */}
				<Form.Item label='Number of People in Your Group' name='groupSize'>
					<Select placeholder='Select group size'>
						<Option value='1-4'>1-4 people</Option>
						<Option value='3-5'>3-5 people</Option>
						<Option value='6-9'>6-9 people</Option>
						<Option value='10+'>More than 10 people</Option>
					</Select>
				</Form.Item>

				{/* Meals Included */}
				<Form.Item label='Would you like meals to be included?' name='meals'>
					<Checkbox.Group>
						<Checkbox value='yes'>Yes, I want meals included (breakfast, lunch, dinner)</Checkbox>
						<Checkbox value='no'>No, I prefer no meals included</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				{/* Accommodation Preference */}
				<Form.Item label='Accommodation Preference' name='accommodation'>
					<Checkbox.Group>
						<Checkbox value='hotels'>Hotels</Checkbox>
						<Checkbox value='guesthouses'>Guesthouses</Checkbox>
						<Checkbox value='inns'>Inns</Checkbox>
						<Checkbox value='bedAndBreakfast'>Bed & Breakfast</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				{/* Preferred Transportation */}
				<Form.Item label='Preferred Transportation' name='transportation'>
					<Checkbox.Group>
						<Checkbox value='privateTransfer'>Private transfer from airport/hotel</Checkbox>
						<Checkbox value='privateCar'>Private car (SUV)</Checkbox>
						<Checkbox value='minibus'>Minibus or coach</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				{/* Tour Guide */}
				<Form.Item label='Do you need a tour guide?' name='tourGuide'>
					<Checkbox.Group>
						<Checkbox value='yes'>Yes</Checkbox>
						<Checkbox value='no'>No</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				{/* Preferred Language for the Tour Guide */}
				<Form.Item label='Preferred Language for the Tour Guide' name='guideLanguage'>
					<Select placeholder='Select a language'>
						<Option value='english'>English</Option>
						<Option value='albanian'>Shqip</Option>
						<Option value='turkish'>Türkçe</Option>
						<Option value='italian'>Italiano</Option>
					</Select>
				</Form.Item>

				{/* Activities Included */}
				<Form.Item label='Activities You Want Included in the Package' name='activities'>
					<Checkbox.Group>
						<Checkbox value='boatTour'>Boat tour</Checkbox>
						<Checkbox value='hiking'>Hiking</Checkbox>
						<Checkbox value='culturalEvents'>Cultural events</Checkbox>
						<Checkbox value='foodWineTasting'>Food or wine tasting</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				{/* Additional Accommodations */}
				<Form.Item label='Any additional accommodations you need (optional)' name='additionalAccommodations'>
					<Input.TextArea rows={3} placeholder='Enter any additional accommodation requests' />
				</Form.Item>

				{/* Special Preferences */}
				<Form.Item label='Special preferences or other questions (optional)' name='specialPreferences'>
					<Input.TextArea rows={3} placeholder='Enter your special preferences or questions' />
				</Form.Item>

				{/* Preferred Method of Contact */}
				<Form.Item label='Preferred Method of Contact' name='contactMethod'>
					<Checkbox.Group>
						<Checkbox value='email'>By email</Checkbox>
						<Checkbox value='phone'>By phone</Checkbox>
					</Checkbox.Group>
				</Form.Item>

				{/* Desired Travel Dates */}
				<Form.Item label='Desired Travel Dates' name='travelDates'>
					<DatePicker.RangePicker />
				</Form.Item>

				{/* Submit Button */}
				<Form.Item>
					<div className='flex flex-col justify-center gap-6'>
						<Button htmlType='button' className='w-full md:w-fit' onClick={onClose}>
							Cancel
						</Button>
						<Button type='primary' className='w-full md:w-fit' htmlType='submit'>
							Submit
						</Button>
					</div>
				</Form.Item>
			</Form>
		</div>
	);
};

export default CraftTourForm;
