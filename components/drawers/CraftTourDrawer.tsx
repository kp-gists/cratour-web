'use client';

import React, { useState } from 'react';
import CraftTourForm from '../form/CraftTourForm';
import { Button, Drawer } from 'antd';
import { PencilRuler } from 'lucide-react';

type Props = {
	page?: string;
};

const CraftTourDrawer = (props: Props) => {
	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Button
				type='primary'
				style={{ height: 50, width: 250 }}
				className='text-lg '
				size='large'
				onClick={showDrawer}
				icon={<PencilRuler className='w-4 h-4 shrink-0' />}
			>
				Craft your own Tour!
			</Button>
			<Drawer
				title='Create your own Tour'
				width={760}
				size='large'
				onClose={onClose}
				open={open}
				styles={{
					body: {
						paddingBottom: 40,
					},
				}}
				className={open ? 'opacity-100' : 'opacity-0'}
			>
				<CraftTourForm onClose={onClose} />
			</Drawer>
		</div>
	);
};

export default CraftTourDrawer;
