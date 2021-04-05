module.exports = {
	purge: [],
	theme: {
		extend: {},
		colors: {
			gray: "#eaedec",
		},
	},
	variants: {},
	plugins: [
		require("tailwindcss-debug-screens"),
		require("@tailwindcss/forms"),
	],
};
