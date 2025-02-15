'use client';

import { useEffect, useRef } from 'react';

type FullScreenModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

const FullScreenModal = ({ isOpen, onClose, children }: FullScreenModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);

	// Close modal when clicking outside the content
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
			<div ref={modalRef} className='relative w-[95vw] md:w-[90vw] h-[90vh] max-w-4xl bg-white rounded-2xl shadow-lg p-6 overflow-hidden'>
				{/* Close Button */}
				<button onClick={onClose} className='absolute top-4 right-4 text-gray-600 hover:text-black text-xl'>
					&times;
				</button>

				{/* Scrollable Content */}
				<div className='max-h-[80vh] overflow-y-auto p-4 overflow-x-hidden '>{children}</div>
			</div>
		</div>
	);
};

export default FullScreenModal;
