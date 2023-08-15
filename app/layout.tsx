import { AuthContextProvider } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Accred",
  description: "An E-Certificate Generator by @blurridge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <ThemeContext>{children}</ThemeContext>
        </AuthContextProvider>
      </body>
    </html>
  );
}
