"use client"

import { useQuery } from "@tanstack/react-query"

const getMessage = async () => {
	const response = await fetch("/api/hello")
	if (!response.ok) throw new Error("Failed to fetch data")
	return response.json()
}

export default function Home() {
	const { data, refetch, isFetched } = useQuery({
		queryKey: ["get-message"],
		queryFn: getMessage,
		enabled: false,
	})

	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<button className="button" onClick={() => refetch()}>
				Hello World!
			</button>
			<strong>{isFetched && JSON.stringify(data)}</strong>
		</div>
	)
}
