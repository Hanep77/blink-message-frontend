import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { z } from 'zod';

async function getUser(body: string) {
    try {
        let response = await fetch('http://localhost:8000/api/v1/auth/login', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        let data = await response.json()
        if (data.statusCode == 200) {
            return true;
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error("Failed to fetch User");
        }
    }
}



export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    console.log(parsedCredentials.data);
                    return true;
                }
                return null;
            },
        }),
    ],
})