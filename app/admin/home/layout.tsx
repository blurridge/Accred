import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { EventDataContextProvider } from "@/context/EventDataContext";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <EventDataContextProvider>{children}</EventDataContextProvider>
      </main>
    </>
  );
};

export default Layout;
