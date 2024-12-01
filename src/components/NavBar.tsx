import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import darkLogo from "../assets/dark-logo.svg";
import Button from "./Button";
import HamburgerIcon from "./Hamburger";

const NavBar = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // text-text-light
    <nav
      className={`fixed top-0 left-0 right-0 z-10 font-vietnam transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-primary-light text-text-light shadow-md py-2 opacity-100"
          : "bg-transparent text-text-dark py-4 opacity-90"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg md:text-2xl font-bold">
          <div className="flex items-center">
            <img
              src={scrolled ? darkLogo : logo}
              alt="Logo"
              className="h-10 md:h-20 w-auto object-contain transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <HamburgerIcon />
        <ul className="md:flex space-x-6 text-sm md:text-xl hidden font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`${
                  scrolled ? "hover:text-text-dark" : "hover:text-primary-light"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button children="Connect Wallet" styleVariant="nav" />
      </div>
    </nav>
  );
};

export default NavBar;
