"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeContext({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
