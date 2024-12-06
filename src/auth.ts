"use server";

import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { assignAuthToken } from "./manageToken";


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
          default:
            return `${error.cause?.err}`;
          }
        }
        throw error;
      }
    }

    export const { auth, signIn, signOut } = NextAuth({
      ...authConfig,
      providers: [
        Credentials({
          async authorize(credentials) {
            try {
          const response = await fetch('http://localhost:8000/api/v1/auth/login', {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json"
            }
          })
          
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }

          const data = await response.json()
          if (data.statusCode == 200) {
            return(data)
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message)
          }
        }
      },
    }),
  ],
});
