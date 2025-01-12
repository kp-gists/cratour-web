import type { Config } from 'tailwindcss';

export default {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					400: '#ffbd30',
				},
			},
			keyframes: {
				slideInLeft: {
					from: { transform: 'translateX(-100%)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				slideInRight: {
					from: { transform: 'translateX(100%)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				slideInLeft: 'slideInLeft 1s ease-out forwards',
				slideInRight: 'slideInRight 1s ease-out forwards',
				fadeIn: 'fadeIn 1s ease-out forwards',
			},
		},
	},
	plugins: [],
} satisfies Config;
