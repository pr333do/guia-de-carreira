const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				foreground: "hsl(var(--foreground))",
			},
			backgroundImage: {
				background: "var(--background)",
			},
			fontFamily: {
        sans: ["SF Pro", "Inter", ...defaultTheme.fontFamily.sans],
        display: ['Instrument']
      },
		},
	},
	plugins: [],
}
