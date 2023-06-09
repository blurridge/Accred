import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
