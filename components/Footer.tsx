"use client";

import { useTheme } from "next-themes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();
  return (
    <footer className="flex flex-col text-sm bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 justify-between text-center dark:bg-[#080E1D]">
      <p className="m-auto text-center text-gray-500">© {currentYear} Accred</p>
      <p className="m-auto text-center text-gray-500">
        Made with {theme === "light" ? "🖤" : "🤍"} by{" "}
        <a
          href="https://github.com/blurridge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @blurridge
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/zachriane/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Zach Riane Machacon
        </a>
      </p>
    </footer>
  );
};
