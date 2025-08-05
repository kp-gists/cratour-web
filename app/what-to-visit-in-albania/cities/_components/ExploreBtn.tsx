'use client'

import React from 'react'

const ExploreBtn = () => {
	return (
		<button
			onClick={() => document.getElementById('cities-grid')?.scrollIntoView({ behavior: 'smooth' })}
			className='mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition'
		>
			Start Exploring
		</button>
	)
}

export default ExploreBtn
