import UserR from "@/model/UserR"
import { hashedPassword } from "@/utils/auth"
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {

        try {
            await connectDB()
        } catch (err) {
            console.log("Error to connected to DB", err)
            return NextResponse.json(
                { error: "Server error" },
                { status: 500 }
            )
        }
        const body = await req.json();
        const { email, password } = body;
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!password || !regex.test(email)) return NextResponse.json(
            { error: "please enter the valid data" },
            { status: 422 }
        )

        const existingUser = await UserR.findOne({ email });

        if (existingUser) return NextResponse.json(
            { error: "User has already existed" },
            { status: 422 }
        )

        console.log("Hear----------------------------", existingUser)

        const hashPassword = await hashedPassword(password);

        const newUser = await UserR.create({ email, password: hashPassword });

        return NextResponse.json(
            {
                massage: "User created",
                data: email
            },
            { status: 201 }
        )

    } catch (err) {
        console.log("Error in POST data", err)
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        )
    }
}