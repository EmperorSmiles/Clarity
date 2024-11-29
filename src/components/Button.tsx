import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  omClick?: () => void;
  styleVariant?: "default" | "nav";
}

const Button = ({
  children,
  omClick,
  styleVariant = "default",
}: ButtonProps) => {
  const navStyle =
    "rounded-xl px-2 py-1 md:px-4 md:py-2 bg-teal-600 hover:bg-teal-700 border-2 border-text-light hover:shadow-md hover:md:shadow-lg text-secondary-light  text-sm md:text-md hidden md:block transition-colors duration-20";

  const defaultStyle =
    "bg-teal-600 hover:bg-teal-700 text-white px-2 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium transition-colors duration-200 mb-4 ";

  const buttonStyle = styleVariant === "nav" ? navStyle : defaultStyle;

  return (
    <button className={buttonStyle} onClick={omClick}>
      {children}
    </button>
  );
};

export default Button;
