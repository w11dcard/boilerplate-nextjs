"use client"

import { useState } from "react"

export default function Home() {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const toggleTheme = () => setIsDarkMode(!isDarkMode)

	return (
		<main
			className={`flex h-screen items-center justify-center ${isDarkMode ? "dark" : ""}`}
			style={{
				backgroundColor: isDarkMode ? "var(--background)" : "var(--background)",
				color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
			}}
		>
			<button
				className={`button ${isDarkMode ? "dark" : ""}`}
				style={{
					backgroundColor: isDarkMode ? "var(--background)" : "var(--background)",
					color: isDarkMode ? "var(--foreground)" : "var(--foreground)",
				}}
				onClick={toggleTheme}
			>
				Hello World!
			</button>
		</main>
	)
}
