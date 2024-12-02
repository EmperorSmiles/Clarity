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
      url: "https://medium.com",
    },
  ];

  return (
    <footer className="bg-primary-light font-vietnam">
      <div className="md:grid md:grid-cols-2 lg:flex justify-between p-8 lg:p-8 text-text-light">
        <ul className="mb-4">
          <li className="font-bold pb-1 ">COMPANY</li>
          <li className="pb-1">About Us</li>
          {/* <li className="pb-1">About Us</li> */}
          <li className="pb-1">Careers</li>
          <li className="pb-1">Blog</li>
          <li className="pb-1">Terms of Service</li>
        </ul>
        <ul className="mb-4">
          <li className="font-bold pb-1">RESOURCES</li>
          <li className="pb-1">Download Apps</li>
          <li className="pb-1">Help Center</li>
          <li className="pb-1">Productivity Methods</li>
          <li className="pb-1">Mindfulness </li>
        </ul>
        <div>
          <p className="text-text-light font-bold pb-2">KEEP IN TOUCH</p>
          <div className=" flex flex-wrap gap-2">
            {social.map((social, idx) => (
              <a
                href={social.url}
                target="_blank"
                title={social.name}
                aria-label={social.name}
                key={idx}
                className={`${social.spacing} border-2 rounded-full border-text-light text-text-light hover:bg-teal-500
                hover:text-text-light hover:border-text-light p-2 flex items-center justify-center w-10 h-10`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="pr-1">
          <h1 className="text-text-light font-bold">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p>Latest news updates sent to your inbox</p>
          <div className="flex mt-4 text-text-light">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="bg-transparent border-2 border-text-light w-48 h-9 p-3 focus:border-text-light placeholder-text-light placeholder-opacity-50"
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
      <div className="bg-background-light  text-center py-10 text-xs lg:text-sm">
        Intellivest &copy; 2024, All rights reserved by
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

// export default function Footer() {
//   return (
//     <div className="bg-gray-100 h-full flex flex-col">
//       <div className="md:grid md:grid-cols-2 lg:flex justify-between p-8 lg:p-8 text-gray-700">
//         <ul className="mb-4">
//           <li className="font-bold pb-1 text-black">FEATURES</li>
//           <li className="pb-1">How it Works</li>
//           <li className="pb-1">For Teams</li>
//           <li className="pb-1">Template</li>
//         </ul>
//         <ul className="mb-4">
//           <li className="font-bold pb-1 text-black">COMPANY</li>
//           <li className="pb-1">About Us</li>
//           <li className="pb-1">Careers</li>
//           <li className="pb-1">Blog</li>
//         </ul>
//         <ul className="mb-4">
//           <li className="font-bold pb-1 text-black">RESOURCES</li>
//           <li className="pb-1">Download Apps</li>
//           <li className="pb-1">Help Center</li>
//           <li className="pb-1">Productivity Methods</li>
//         </ul>
//         <div className="pr-1">
//           <h1 className="text-black font-bold">SUBSCRIBE TO OUR NEWSLETTER</h1>
//           <p>Latest news updates sent to your inbox</p>
//           <div className="flex mt-4">
//             <input
//               type="email"
//               name="email"
//               id=""
//               placeholder="Enter Your Email"
//               className="bg-transparent border-2 border-gray-800 w-48 h-9 p-3 focus:border-gray-800"
//             />
//             <button
//               type="button"
//               className="bg-gray-800 w-32 py-1.5 h text-white text-xs lg:text-sm"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="bg-slate-200 text-center py-10 text-xs lg:text-sm">
//         Intellivest &copy; 2024, All rights reserved by
//         <Link
//           className="underline ml-2"
//           href={"https://github.com/EmperorSmiles"}
//           target="blank"
//         >
//           Adejoh Favour Smiles
//         </Link>
//       </div>
//     </div>
//   );
// }

export default Footer;
