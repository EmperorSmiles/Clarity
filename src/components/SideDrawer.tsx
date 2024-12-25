import React from "react";
import { Link } from "react-router-dom";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: { label: string; href: string }[];
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  menuItems,
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={onClose} // Close on backdrop click
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-primary-light dark:bg-primary-dark p-6 z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Items */}
        <ul className="space-y-6 text-xl md:text-3xl mt-9">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                onClick={onClose} // Close drawer on navigation
                className="block text-text-light dark:text-text-dark hover:text-teal-500 transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;
