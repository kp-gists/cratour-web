'use client';

import React, { useState } from 'react';
import { Form, Input, DatePicker, InputNumber, Drawer, Button, Select } from 'antd';
import { createWhatsappHref } from '@/lib/whatsapp';
import { contacts } from '@/constants/contacts';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

const { Option } = Select;

const { RangePicker } = DatePicker;
type Props = {
	slug: string;
	label: string;
	title: string;
	id: string;
	order: number;
};

const JoinTourBtn = ({ label, slug, title, id, order }: Props) => {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const [form] = Form.useForm();
	const [mode, setType] = useState<'email' | 'whatsapp'>('email');
	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const onFinish = (data: any) => {
		const message = `Pershendetje, I would like to request a price for a transfer.
    Here are my details:
    - **Email:** ${data.email}
    - **Passengers:** ${data.group}
    - **Start Date:** ${data.dateRange[0]}
    - **Return Date:** ${data.dateRange[1]}
    - **Preferred Language:** ${data.language ? data.language : 'English'}
    - **Additional Notes:** ${data.extraInfo ? data.extraInfo : 'No additional notes'}
    Please provide me with the pricing details. Looking forward to your response. Thank you!`;

		if (mode === 'whatsapp') {
			setIsLoading(true);

			const text = encodeURIComponent(message);
			const ref = createWhatsappHref(contacts.whatsapp.telNr, text);
			router.push(ref, {});
			onClose();
			setIsLoading(false);
			form.resetFields();
		} else {
			const notes = `<div>
        <div>
          <p><strong>**Tour Slug:</strong> ${slug}</p>
          <p>Check tour URL: 
            <a href="https://cratour.al/visit-albania/services/tour-packages/${slug}" target="_blank">
            ${title}
            </a>
          </p>
          <p>Check tour Strapi CMS URL: 
            <a href="https://cra-strapi-production.up.railway.app/admin/content-manager/collection-types/api::tour-package.tour-package/${id}" target="_blank">
            ${order} -  ${title}
            </a>
          </p>
          <p><strong>**Passengers:</strong> ${data.group}</p>
          <p><strong>**Start Date:</strong> ${data.dateRange[0]}</p>
          <p><strong>**Return Date:</strong>  ${data.dateRange[1]}</p>
          <p><strong>**Preferred Language:</strong> ${data.language ? data.language : 'English'}</p>
          <p><strong>**Additional Notes:</strong> ${data.extraInfo}</p>
        </div>
        <h5>Please provide me with the pricing details. Looking forward to your response. Thank you!</h5>
        </div>`;
			const bodyData = {
				subject: 'I would like to request a price for a tour',
				serviceType: 'tour',
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
					onClose();
				});
		}
	};

	return (
		<div>
			<Button type='dashed' size='large' className='border-cyan-400 hover:scale-105' onClick={showDrawer}>
				{label}
			</Button>
			<Drawer
				title={label + ' - ' + title}
				width={600}
				onClose={onClose}
				open={open}
				styles={{
					body: {
						paddingBottom: 40,
					},
				}}
			>
				<Form form={form} layout='vertical' onFinish={onFinish} initialValues={{ groupSize: 1 }} className='flex flex-col justify-between h-full'>
					{/* Date Range */}
					<div>
						<Form.Item label='Select Date Range' name='dateRange' rules={[{ required: true, message: 'Please select a date range' }]}>
							<RangePicker />
						</Form.Item>

						<div className='flex flex-row gap-4'>
							{/* Email (Required) */}
							<Form.Item
								label='Email'
								name='email'
								rules={[
									{ required: true, message: 'Please enter your email' },
									{ type: 'email', message: 'Enter a valid email' },
								]}
							>
								<Input placeholder='Enter your email' className='w-[220px]' />
							</Form.Item>

							{/* Group Size */}
							<Form.Item label='Group Size' name='group' rules={[{ required: true, message: 'Please enter the group size' }]}>
								<InputNumber min={1} max={100} className='w-16' />
							</Form.Item>
						</div>

						<Form.Item label='Preferred Language for the Tour Guide' name='language' className='w-[260px]'>
							<Select placeholder='Select a language'>
								<Option value='english'>English</Option>
								<Option value='albanian'>Shqip</Option>
								<Option value='turkish'>Türkçe</Option>
								<Option value='italian'>Italiano</Option>
							</Select>
						</Form.Item>

						{/* Extra Info */}
						<Form.Item label='Extra Information' name='extraInfo'>
							<Input.TextArea rows={4} placeholder='Enter additional details...' />
						</Form.Item>
					</div>

					{/* Submit Button */}
					<div className='flex flex-col pt-10  md:flex-row justify-center items-center gap-3 md:gap-6 w-full'>
						<Button disabled={isLoading} type='default' htmlType='submit' className='w-full md:w-fit'>
							Cancel
						</Button>
						<Button
							loading={isLoading}
							type='dashed'
							disabled={isLoading}
							htmlType='submit'
							onClick={() => setType('email')}
							className='w-full md:w-fit border-cyan-400'
						>
							Send email
						</Button>
						<button
							disabled={isLoading}
							className='w-full px-4 py-1.5 rounded-lg md:w-fit bg-green-400 active:bg-green-600 visited:bg-green-600 hover:bg-green-600 hover:text-white focus:bg-green-600 '
							type='submit'
							onClick={() => setType('whatsapp')}
						>
							Continue to whatsapp
						</button>
					</div>
				</Form>
				<ToastContainer />
			</Drawer>
		</div>
	);
};

export default JoinTourBtn;
