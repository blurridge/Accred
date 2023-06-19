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
import { db } from "@/firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";
import { ReactNode } from "react";

export type Admin = {
  email: string;
};

export type AuthContextProps = {
  googleLogin: () => void;
  logOut: () => void;
  user: User | null;
  checkIfUserIsAdmin: (user: User) => boolean;
  loading: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  googleLogin: () => {},
  logOut: () => {},
  user: null,
  checkIfUserIsAdmin: (user: User) => false,
  loading: true,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [adminList, setAdminList] = useState<Admin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  useEffect(() => {
    const q = query(collection(db, "admins"));
    const unsubscribe = onSnapshot(q, (snap) => {
      setLoading(true);
      const data: Admin[] = snap.docs.map((doc) => ({
        email: doc.data().email,
      }));
      setAdminList(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const checkIfUserIsAdmin = (user: User) => {
    return (
      adminList.length !== 0 &&
      adminList.some((person) => person.email === user.email)
    );
  };

  return (
    <AuthContext.Provider
      value={{ googleLogin, logOut, user, checkIfUserIsAdmin, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
