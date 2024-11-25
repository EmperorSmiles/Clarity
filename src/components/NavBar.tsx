import logo from "../assets/logo.svg";

const NavBar = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-primary-light text-text-light py-0 font-vietnam">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Clarity"
              className="h-8 md:h-20 w-auto object-contain p-0" // Adjust height as needed
            />
          </div>
        </div>
        <ul className="flex space-x-6 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-secondary-light">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
