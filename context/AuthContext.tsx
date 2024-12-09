"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


const AuthContext = createContext<string|any>(null);

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const pathName = usePathname();
  const [token, setToken] = useState<string | null>(localStorage.getItem("AuthToken"));
  const [user, setUser] = useState<string|null>(localStorage.getItem("UserEmail"));

  if(token){
    if(pathName == '/login'){
      router.push('chat');
    }
  }else{
    router.push('/login');
  }


  const saveValue = (newValue: string, userData: string) => {
    setToken(newValue);
    setUser(userData);
    localStorage.setItem("AuthToken", newValue);
    localStorage.setItem("UserEmail", userData);
  };

  const clearValue = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("UserEmail")
  };

  return (
    <AuthContext.Provider value={{ token, saveValue, clearValue, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
