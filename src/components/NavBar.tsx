import logo from "../assets/logo.svg";

const NavBar = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-primary-light text-text-light py-2 md:py-0 font-vietnam fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg  md:text-2xl font-bold">
          <div className="flex items-center ">
            <img
              src={logo}
              alt="Clarity"
              className="h-8 md:h-20 w-auto object-contain p-0" // Adjust height as needed
            />
          </div>
        </div>
        <ul className="md:flex space-x-6 text-sm md:text-xl hidden">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-secondary-light">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-xl px-2 py-1 md:px-4 md:py-2 bg-teal-600 hover:bg-teal-700 border-2 border-text-light hover:shadow-md hover:md:shadow-lg text-secondary-light text-md hidden md:block transition-colors duration-200">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
