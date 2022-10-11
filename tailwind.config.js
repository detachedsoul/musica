/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		extend: {
			colors: {
				"custom-black": "#1d2123",
				"custom-dark-black": "#1a1e1f",
				"navbar": "#1a1e1f",
				"custom-white": "#efeee0",
				"index-hero": "#609eaf",
			},
			fontFamily: {
				"quicksand": "Quicksand"
			}
		},
	},
	plugins: [],
};
