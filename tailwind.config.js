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
		color: {
			warning: "#FBC457",
			error: "#C93A3A",
			gray: {
				darkest: "#B6BEBE",
				dark: "#C7C9CD",
				light: "#EAEDEC",
				lightest: "#F0F4F3",
			},
			green: {
				darkest: "#046E62",
				dark: "#029383",
				light: "#65B7AE",
				lightest: "#B1D3CF",
			},
			black: {
				darkest: "#0C0D0D",
				dark: "#1F2121",
				light: "#2F3333",
				lightest: "#5A5D60",
			},
		},
	},
	variants: {},
	plugins: [
		require("tailwindcss-debug-screens"),
		require("@tailwindcss/forms"),
	],
};
