"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


const AuthContext = createContext<string|any>(null);

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const pathName = usePathname();
  const [token, setToken] = useState<string | null>(localStorage.getItem("AuthToken"));

  // useEffect(() => {
    if(token){
      if(pathName == '/login'){
        router.push('chat');
      }
    }else{
      router.push('/login');
    }
  // }, []);

  const saveValue = (newValue: string) => {
    setToken(newValue);
    localStorage.setItem("AuthToken", newValue);
  };

  const clearValue = () => {
    setToken(null);
    localStorage.removeItem("AuthToken");
  };

  return (
    <AuthContext.Provider value={{ token, saveValue, clearValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
