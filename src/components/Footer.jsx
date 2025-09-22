import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <div className="max-w-screen container mx-auto py-4 px-4 md:px-20 flex flex-col items-center-safe bg-rose-700">
        <h1 className="my-2 text-sm font-medium bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Visit On{" "}
        </h1>
        {/* Contact Icons */}
        <div className="w-50 border-b-1 border-b-slate-500 pb-4 flex justify-center-safe ">
          <ul className=" flex space-x-2">
            <li>
              <a
                href="https://www.linkedin.com/in/raman-sagar-014729358 "
                target="_blank"
              >
                <FaLinkedin className="text-2xl md:text-3xl text-blue-900 hover:scale-110 duration-200 cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://profile.indeed.com/p/ramans-szq45zz"
                target="_blank"
              >
                <SiIndeed className="text-2xl md:text-3xl text-blue-900 hover:scale-110 duration-200 cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/9389238342" target="-blank">
                <FaWhatsapp className="text-2xl md:text-3xl text-green-600 hover:scale-110 duration-200 cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/?hl=en#reactivated"
                target="_blank"
              >
                <FaInstagram className="text-2xl md:text-3xl text-red-400 hover:scale-110 duration-200 cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/raman-sagar"
                target="_blank"
              >
                <FaGithubSquare className="text-2xl md:text-3xl text-black hover:scale-110 duration-200 cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
        <br />
        {/* Declaration */}
        <div>
          <p className="text-sm text-center bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
            &copy; 2025 Available for job. Verified details.
          </p>
          <p className="text-sm text-center bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent ">
            Passionate Client ❤️ Raman sagar
          </p>
        </div>
      </div>
    </>
  );
};
