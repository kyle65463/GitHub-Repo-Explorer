const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					150: "#eaecf1",
				},
				header: "#1f2937", // gray-800
				content: {
					dark: "#1f2937", // gray-800
					mid: "#4B5563", // gray-600
					light: "#6B7280", // gray-500
					exlight: "#9ca3af", // gray-400
				},
			},
			boxShadow: {
				floating: "2px 4px 3px #999",
				card: "1px 3px 4px #E7E7E7",
			},
		},
	},
	plugins: [require("daisyui"), require("tailwindcss"), require("precss"), require("autoprefixer")],
	daisyui: {
		themes: ["bumblebee"],
	},
};
