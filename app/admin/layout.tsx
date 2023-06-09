import { AdminAuthContextProvider } from "@/context/AdminAuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AdminAuthContextProvider>{children}</AdminAuthContextProvider>;
};

export default Layout;
