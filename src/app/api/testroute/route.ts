import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, res: NextResponse) => {
	try {
		const data = {
			res: "Hello from the test route!",
		}

		return NextResponse.json(data)
	} catch (error) {
		console.error(error)
	}
}
