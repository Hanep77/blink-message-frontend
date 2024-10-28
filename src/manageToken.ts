"use client";

export const assignAuthToken = (token: string): void => {
  if (token) {
    console.log(token);
    localStorage.setItem("authToken", token);
    console.log("Token assigned succesfully");
  } else {
    throw new Error("Failed to assign token");
  }
}

export function isTokenAssigned() {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      return {
        authToken: token
      }
    } else {
      return {
        authToken: null
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
