/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {

			keyframes: {
				shine: {
				  '0%': { 'background-position': '100%' },
				  '100%': { 'background-position': '-100%' },
				},

				marquee: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			  },
			  animation: {
				shine: 'shine 5s linear infinite',
				marquee: 'marquee 5s linear infinite',
			  },

			colors: {
				dark: '#0C0C0C',
				text: '#1d1d1f',
				textl: '#1d1d1f90',
				light: '#F6F5F2',
				light50: '#F6F5F260',

				skyblue: "#80C4E9",
				orange: "#F96E2A",
				purple: "#7360DF",
				grey: "#DDDDDD",
				pink: "#FF7EE2",
				green: "#38E54D",
				yellow: "#FEEC37",

				beige: "#F3E99F",
				retrored: "#FF6D60",
				retrosandal: '#F6E9B2',
				retropink: '#FF8C9E',
				retroviolet: '#9F70FD',
			},

			fontFamily: {
				supertalls: ['supertalls', 'sans-serif'],
				edge: ['edge', 'sans-serif'],
				creato: ['creato', 'sans-serif'],
				style: ['style', 'sans-serif'],
				paragrabh: ['paragrabh', 'sans-serif'],
				subtitle: ['subtitle', 'sans-serif'],
				sfb: ['sfb', 'sans-serif'],
				lighttext: ['lighttext', 'sans-serif'],
				bentocom: ['bentocom', 'sans-serif'],
				iosthin: ['iosthin', 'sans-serif'],

				roundman: ['roundman', 'sans-serif'],
				main: ['main', 'sans-serif'],
				upper: ['upper', 'sans-serif'],
				
				satoshi: ['satoshi', 'sans-serif'],
				footer: ['footer', 'sans-serif'],

			},

			borderRadius: {
				custom: '30% 70% 70% 30% / 30% 30% 70% 70%',
			},

			boxShadow: {
				bento: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
				retro: 'rgba(0, 0, 0) 7px 7px 0px',
				retrosm: 'rgba(0, 0, 0) 3px 3px 0px',
			},

			textShadow: {
				retrotextlg: 'rgba(0, 0, 0) 5px 5px 0px',
			},

		},
	},
	plugins: [
		require("tailwindcss-textshadow"),
		function ({ addUtilities }) {
			addUtilities({
			  ".mask-sparkle": {
				mask: "radial-gradient(#0000 71%, #000 72%) 10000% 10000%/99.5% 99.5%",
				WebkitMask:
				  "radial-gradient(#0000 71%, #000 72%) 10000% 10000%/99.5% 99.5%", // For Safari compatibility
			  },
			});
		  },
	],
}