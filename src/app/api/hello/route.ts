import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, res: NextResponse) => {
	try {
		const data = {
			message: "Hello from the test route!",
		}

		return NextResponse.json(data)
	} catch (error) {
		console.error(error)
	}
}
