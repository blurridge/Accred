"use client";

import {
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { db } from "@/firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

export type Admin = {
  email: string;
};

export type AdminContextProps = {
  adminList: Admin[];
  loading: boolean;
};

const AdminContext = createContext<AdminContextProps>({
  adminList: [],
  loading: true,
});

export const AdminContextProvider = ({ children }: { children: ReactNode }) => {
  const [adminList, setAdminList] = useState<Admin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
  return (
    <AdminContext.Provider value={{ adminList, loading }}>
      {children}
    </AdminContext.Provider>
  );
};

export const AdminData = () => {
  return useContext(AdminContext);
};
