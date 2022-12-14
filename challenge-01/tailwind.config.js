module.exports = {
	darkMode: "class",
	content: ["./**/*.{html,js}", "./index.html"],
	theme: {
		extend: {
			container: {
				padding: "2rem",
				center: true,
			},
			colors: {
				neutral: {
					100: "#d0d0d0",
					200: "#a1a1a1",
					300: "#737373",
					400: "#444444",
					DEFAULT: "#151515",
					500: "#151515",
					600: "#111111",
					700: "#0d0d0d",
					800: "#080808",
					900: "#040404",
				},
				primary: {
					50: "#F1F3FF",
					100: "#cfd4ed",
					200: "#9ea9db",
					300: "#6e7eca",
					400: "#3d53b8",
					DEFAULT: "#0d28a6",
					500: "#0d28a6",
					600: "#0a2085",
					700: "#081864",
					800: "#051042",
					900: "#030821",
				},
				secondary: {
					100: "#def1df",
					200: "#bee3bf",
					300: "#9dd49f",
					400: "#7dc67f",
					DEFAULT: "#5cb85f",
					500: "#5cb85f",
					600: "#4a934c",
					700: "#376e39",
					800: "#254a26",
					900: "#122513",
				},
				danger: {
					100: "#fed5de",
					200: "#fdabbd",
					300: "#fc809c",
					400: "#fb567b",
					DEFAULT: "#fa2c5a",
					500: "#fa2c5a",
					600: "#c82348",
					700: "#961a36",
					800: "#641224",
					900: "#320912",
				},
				warning: {
					100: "#fef5cc",
					200: "#fdeb99",
					300: "#fbe066",
					400: "#fad633",
					DEFAULT: "#f9cc00",
					500: "#f9cc00",
					600: "#c7a300",
					700: "#957a00",
					800: "#645200",
					900: "#322900",
				},
				success: {
					100: "#e3f4de",
					200: "#c7eabe",
					300: "#abdf9d",
					400: "#8fd57d",
					DEFAULT: "#73ca5c",
					500: "#73ca5c",
					600: "#5ca24a",
					700: "#457937",
					800: "#2e5125",
					900: "#172812",
				},
			},
			fontFamily: {
				brand: ["Rubik", "sans-serif"],
				primary: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
