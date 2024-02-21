"use client"

import { SessionProvider } from "next-auth/react"

const NextAuthProvider = ({ children }) => {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>
        </div>
    );
};

export default NextAuthProvider;