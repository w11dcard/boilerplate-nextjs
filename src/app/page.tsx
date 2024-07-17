"use client"

import { useState } from "react"

export default function Home() {
	const [message, setMessage] = useState("Test GET Request")

	const handleGetMessage = async () => {
		try {
			const response = await fetch("/api/hello") // Fetch data from API endpoint
			const data = await response.json() // Parse JSON data
			setMessage(data.message) // Set message from response
		} catch (error) {
			console.error(error)
			setMessage("Error fetching data") // Set static error message
		}
	}

	return (
		<div className="flex items-center justify-center">
			<button className="button" onClick={handleGetMessage}>
				{message}
			</button>
		</div>
	)
}
