import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { EventDataContextProvider } from "@/context/EventDataContext";

const Layout = ({ children }: { children: ReactNode }) => {
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
