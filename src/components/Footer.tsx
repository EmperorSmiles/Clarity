import { FaXTwitter, FaMedium } from "react-icons/fa6";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  const social = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      spacing: "mb-4",
      url: "https://www.instagram.com",
    },
    {
      name: "X (formerly Twitter)",
      icon: <FaXTwitter />,
      spacing: "mb-4",
      url: "https://www.twitter.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      spacing: "mb-4",
      url: "https://www.facebook.com",
    },
    {
      name: "Youtube",
      icon: <FaYoutube />,
      url: "https://youtube.com",
    },
    {
      name: "Medium",
      icon: <FaMedium />,
      url: "https://medium.com",
    },
    {
      name: "Email",
      icon: <FaMailBulk />,
      spacing: "mb-4",
      url: "https://medium.com",
    },
  ];

  return (
    <footer className="bg-primary-light dark:bg-background-dark/90  font-vietnam transition-all duration-500 ease-in-out text-xs md:text-sm">
      <div className="md:grid md:grid-cols-2 lg:flex justify-between p-8 lg:p-8 text-text-light">
        <ul className="mb-4 dark:text-text-dark/80">
          <li className="font-bold pb-1 ">COMPANY</li>
          <li className="pb-1">About Us</li>
          {/* <li className="pb-1">About Us</li> */}
          <li className="pb-1">Careers</li>
          <li className="pb-1">Blog</li>
          <li className="pb-1">Terms of Service</li>
        </ul>
        <ul className="mb-4 dark:text-text-dark/80">
          <li className="font-bold pb-1">RESOURCES</li>
          <li className="pb-1">Download Apps</li>
          <li className="pb-1">Help Center</li>
          <li className="pb-1">Productivity Methods</li>
          <li className="pb-1">Mindfulness </li>
        </ul>
        <div>
          <p className="text-text-light font-bold pb-2 dark:text-text-dark/80">
            KEEP IN TOUCH
          </p>
          <div className=" flex flex-wrap gap-2 dark:text-text-dark/80">
            {social.map((social, idx) => (
              <a
                href={social.url}
                target="_blank"
                title={social.name}
                aria-label={social.name}
                key={idx}
                className={`${social.spacing} border-2 rounded-full border-text-light dark:border-text-dark/80 dark:hover:text-text-light text-text-light hover:bg-teal-500 
                hover:text-text-light hover:border-text-light p-2 flex items-center justify-center w-10 h-10 dark:text-text-dark/80`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="pr-1 dark:text-text-dark/80">
          <h1 className="text-text-light font-bold dark:text-text-dark/80">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p>Latest news updates sent to your inbox</p>
          <div className="flex mt-4 text-text-light">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="bg-transparent border-2 border-teal-600 w-48 h-9 p-3 focus:border-teal-600 placeholder-text-light placeholder-opacity-50 dark:placeholder-text-dark/60 "
            />
            <button
              type="button"
              className="bg-teal-600 hover:bg-teal-700 w-32 py-1.5 h text-white text-xs lg:text-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary-light dark:bg-background-dark/90 text-text-light transition-all duration-500 ease-in-out text-center py-10 text-xs lg:text-sm dark:text-text-dark/80">
        Clarity &copy; 2024, All rights reserved by
        <a
          className="underline ml-2"
          href={"https://github.com/EmperorSmiles"}
          target="blank"
        >
          Adejoh Favour Smiles
        </a>
      </div>
    </footer>
  );
};

export default Footer;
