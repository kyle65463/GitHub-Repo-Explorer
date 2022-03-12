const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
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
		themes: [
			{
				light: {
					primary: "#0277bd",
					"primary-focus": "#056399",
					"primary-content": "#ffffff",

					secondary: "#f59e0b",
					"secondary-focus": "#d97706",
					"secondary-content": "#ffffff",

					accent: "#6B7280",
					"accent-focus": "#4B5563",
					"accent-content": "#ffffff",

					neutral: "#3b424e",
					"neutral-focus": "#2a2e37",
					"neutral-content": "#ffffff",

					"base-100": "#ffffff",
					"base-200": "#f9fafb",
					"base-300": "#ced3d9",
					"base-content": "#1e2734",

					info: "#1c92f2",
					success: "#009485",
					warning: "#ff9900",
					error: "#ff3333",
				},
			},
		],
	},
};
