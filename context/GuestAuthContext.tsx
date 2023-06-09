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

type AuthContextProps = {
  googleLogin: () => void;
  logOut: () => void;
  user: User | null;
};

const GuestAuthContext = createContext<AuthContextProps>({
  googleLogin: () => {},
  logOut: () => {},
  user: null,
});

export const GuestAuthContextProvider = ({
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
    <GuestAuthContext.Provider value={{ googleLogin, logOut, user }}>
      {children}
    </GuestAuthContext.Provider>
  );
};

export const GuestAuth = () => {
  return useContext(GuestAuthContext);
};
