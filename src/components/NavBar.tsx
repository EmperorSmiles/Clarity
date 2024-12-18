import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import darkLogo from "../assets/dark-logo.svg";
import Button from "./Button";
import HamburgerIcon from "./Hamburger";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";

import { ConnectKitButton } from "connectkit";

const NavBar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 font-vietnam transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-primary-light dark:bg-primary-dark dark:text-text-dark  text-text-light shadow-md py-2 opacity-100"
          : "bg-transparent text-text-dark py-4 opacity-90"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg md:text-2xl font-bold">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={scrolled && !isDarkMode ? darkLogo : logo}
                alt="Logo"
                className="h-10 md:h-20 w-auto object-contain transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>

        <ul className="md:flex space-x-6 text-sm md:text-xl hidden font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`${
                  scrolled
                    ? "hover:text-text-dark dark:hover:text-text-light "
                    : "hover:text-[#1c9977] text-[#] "
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-4 p-2 rounded-full transition-all duration-1000 ease-in-out"
          >
            {isDarkMode ? (
              <IoSunnyOutline size={30} />
            ) : (
              <FaRegMoon size={30} />
            )}
          </button>
          <HamburgerIcon />
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress }) => {
              return (
                <Button styleVariant="nav" onClick={show}>
                  {isConnected ? truncatedAddress : "Connect Wallet"}
                </Button>
              );
            }}
          </ConnectKitButton.Custom>
          {/* <Button
            styleVariant="nav"
            onClick={() => connect({ connector: injected() })}
          >
            {isConnecting ? "Connecting..." : address}
            {isDisconnected && "Connect Wallet"}
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
