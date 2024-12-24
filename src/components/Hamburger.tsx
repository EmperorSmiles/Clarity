// import { useState } from "react";

interface HamburgerIconProps {
  isOpen: boolean; // External state to control the icon
  onClick?: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-6 h-5 focus:outline-none mr-8 md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span
        className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out transform ${
          isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
        } top-0`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        } top-2`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out transform ${
          isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
        } top-4`}
      />
    </button>
  );
};

export default HamburgerIcon;
