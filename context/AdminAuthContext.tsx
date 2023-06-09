"use client";

import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { ReactNode } from "react";
import { AuthContextProps } from "@/context/GuestAuthContext";

const AdminAuthContext = createContext<AuthContextProps>({
  googleLogin: () => {},
  logOut: () => {},
  user: null,
});

export const AdminAuthContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AdminAuthContext.Provider value={{ googleLogin, logOut, user }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const AdminAuth = () => {
  return useContext(AdminAuthContext);
};
