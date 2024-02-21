const { default: NextAuth } = require("next-auth/next")
import UserR from "@/model/UserR";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import CredentialsProvider  from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            async authorize(credential) {

                try {
                    await connectDB()
                } catch (err) {
                    console.log("Error in connected to DB", err)
                    return NextResponse.json({
                        error: "Server error"
                    })
                }

                const { email, password } = credential;
                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

                if (!password || !regex.test(email)) throw new Error("please enter the valid data");

                const existingUser = await UserR.findOne({ email });

                if (!existingUser) throw new Error("User has not existed yet")

                const isValid = await verifyPassword(password, existingUser.password);

                if (!isValid) throw new Error("Email or password is invalid");

                NextResponse.json(
                    {massage: "Login was successfully"},
                    {status: 201}
                )

                return { email }

            }
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }