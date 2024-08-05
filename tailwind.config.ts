import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			colors: {
				// primary: "#050816"
				primary: "#42376C",
				// secondary: "#aaa6c3",
				// secondary: "#828285",
				secondary: "#68686b",
				// tertiary: "#151030",
				tertiary: "white",
				"black-100": "whitesmoke",
				"black-200": "white",
				// "black-200": "#090325",
				"white-100": "#f3f3f3",
				// "white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				// "hero-pattern": "url('/herobg.webp')",
				"hero-pattern": "linear-gradient(90deg, rgba(223,222,245,1) 0%, rgba(245,245,247,1) 35%, rgba(223,229,230,1) 100%);",
			},
		},
	},
	plugins: [],
};
export default config;
