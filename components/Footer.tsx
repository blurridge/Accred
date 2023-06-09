export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 justify-between text-center">
      <p className="m-auto text-center text-gray-500">
        © {currentYear}{" "}
        Made with 🖤 by {" "}
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
