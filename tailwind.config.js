/** @type {import('tailwindcss').Config} */
export default {
	content: [
		`./components/**/*.{vue,js,ts}`,
		`./layouts/**/*.vue`,
		`./pages/**/*.vue`,
		`./composables/**/*.{js,ts}`,
		`./plugins/**/*.{js,ts}`,
		`./utils/**/*.{js,ts}`,
		`./App.{js,ts,vue}`,
		`./app.{js,ts,vue}`,
		`./Error.{js,ts,vue}`,
		`./error.{js,ts,vue}`,
		`./app.config.{js,ts}`,
		`./nuxt.config.{js,ts}`,
		`./form.theme.js`,
		`./formkit.config.{js,ts}`,
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

