import { Footer } from "@/components/Footer";
import { GuestNavbar } from "@/components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <GuestNavbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
