const config = {
	plugins: [require("tailwindcss-animate")],
	content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				background: "rgb(var(--background))",
				foreground: "rgb(var(--foreground))",
				card: {
					DEFAULT: "rgb(var(--card))",
					foreground: "rgb(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "rgb(var(--popover))",
					foreground: "rgb(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "rgb(var(--primary))",
					foreground: "rgb(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "rgb(var(--secondary))",
					foreground: "rgb(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "rgb(var(--muted))",
					foreground: "rgb(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "rgb(var(--accent))",
					foreground: "rgb(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "rgb(var(--destructive))",
					foreground: "rgb(var(--destructive-foreground))",
				},
				input: "rgb(var(--input))",
				border: "rgb(var(--border))",
				ring: "rgb(var(--ring))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
}

export default config
