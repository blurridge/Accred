"use client"

import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { EventDataContextProvider } from "@/context/EventDataContext";
import { AdminAuth } from "@/context/AdminAuthContext";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const { user } = AdminAuth();
  const router = useRouter();
  if(user === null) {
    router.push("/admin/login");
  }
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <EventDataContextProvider>{children}</EventDataContextProvider>
      </div>
    </>
  );
};

export default Layout;
