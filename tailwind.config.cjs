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
				sans: ["Nunito", "sans-serif"],
				serif: ["Melodrama", "serif"],
			},
		},
	},
	plugins: [],
};
