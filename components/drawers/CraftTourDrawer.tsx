'use client';

import React, { useState } from 'react';
import CraftTourForm from '../form/CraftTourForm';
import { Button, Drawer, Modal, Space } from 'antd';
import { PencilRuler, PlusIcon } from 'lucide-react';

type Props = {
	page?: string;
};

const CraftTourDrawer = (props: Props) => {
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Button type='primary' className='text-lg ' size='large' onClick={showDrawer} icon={<PencilRuler className='w-4 h-4' />}>
				Craft your own Tour!
			</Button>
			<Drawer
				title='Create your own Tour'
				width={720}
				size='large'
				onClose={onClose}
				open={open}
				styles={{
					body: {
						paddingBottom: 40,
					},
				}}
			>
				<CraftTourForm onClose={onClose} />
			</Drawer>
		</div>
	);
};

export default CraftTourDrawer;
