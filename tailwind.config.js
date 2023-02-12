/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				blue_primary: '#275ca5',
				blue_secondary: '#0e2a60',
				blue_heading: '#0e2a60',
				blue_light: '#123386',
			},
			backgroundImage: {
				hero_bg: "url('./src/images/werner-roofing-logo-1a.png')",
			},
		},
	},
	plugins: [],
};
