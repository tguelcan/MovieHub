const { fontFamily } = require('tailwindcss/defaultTheme');
const { orange, slate } = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			borderColor: (theme) => ({
				DEFAULT: theme('colors.light', 'currentColor')
			})
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: {
				dark: orange['700'],
				DEFAULT: orange['600'],
				light: orange['400']
			},
			white: '#FFF',
			light: slate['100'],
			dark: slate['800'],
			gray: {
				light: slate['50'],
				DEFAULT: slate['500'],
				dark: slate['900']
			}
		},
		container: {
			center: true,
			screens: {
				'2xl': '1280px'
			},
			padding: {
				DEFAULT: '0.5rem',
				lg: '0rem'
			}
		},
		fontFamily: {
			sans: ['Roboto', ...fontFamily.sans],
			secondary: ['Roboto Condensed', ...fontFamily.sans]
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar')
	]
};

module.exports = config;
