import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { createContext } from "react";

type User = {
    name: string;
    email: string;
};

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name:string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User|null>(null);
    const [isLoggedIn, setIsLoggenIn] = useState(false);

    useEffect(() => {
        //fetch if the user's cookies are valid then skip login
    },[]);
    const login = async (email: string, password: string) => {};
    const signup = async (email: string, password: string) => {};
    const logout = async () => {};

    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);