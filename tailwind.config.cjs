/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				grey: "#E1DFDD",
				white: "#FFF",
				black: "#000",
			},
			fontFamily: {
				sans: ["OpenSans", "sans-serif"],
				serif: ["Melodrama", "serif"],
			},
			fontSize: {
				"10xl": "10rem",
			},
		},
	},
	plugins: [],
};
