import { GuestAuthContextProvider } from "@/context/GuestAuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <GuestAuthContextProvider>{children}</GuestAuthContextProvider>;
};

export default Layout;
