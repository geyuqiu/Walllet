module.exports = {
	purge: [],
	theme: {
		extend: {},
		minHeight: {
			0: "0",
			"10vh": "10vh",
			"20vh": "20vh",
			"70vh": "70vh",
			full: "100vh",
		},
	},
	variants: {},
	plugins: [
		require("tailwindcss-debug-screens"),
		require("@tailwindcss/forms"),
	],
};
