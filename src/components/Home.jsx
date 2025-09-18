import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";

import pic from "../../public/photo.avif";

export const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen border-b-2 border-b-fuchsia-500 container mx-auto px-4 md:px-20 mt-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24  space-y-2 order-2 md:order-none">
            <span className="text-xl">Welcome In My Feed</span>
            {/* Developer*/}

            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm a </h1>

              <ReactTyped
                className="text-red-700 font-bold break-all"
                strings={["Raman Sagar", "Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-medium text-justify">
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              repudiandae ducimus totam ratione eaque quibusdam corrupti culpa
              voluptatibus non fugiat.
            </p>
            <br></br>

            <div className="flex flex-wrap items-center flex-col space-y-6 md:space-y-0  md:flex-row justify-between  ">
              {/*Social Media Icons */}
              <div className="space-y-2 ">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-2">
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
                </ul>
              </div>
              {/*Skills Icons */}

              <div className="space-y-2 mb-4 ">
                <h1 className="font-bold">Currently working on</h1>

                <div className="flex space-x-2">
                  <FaHtml5 className="text-xl md:text-3xl text-orange-500 hover:scale-110 duration-200 rounded-full -[2px] cursor-pointer" />
                  <IoLogoCss3 className="text-xl md:text-3xl text-blue-700 hover:scale-110 duration-200 rounded-full -[2px] cursor-pointer" />
                  <FaBootstrap
                    className="text-xl md:text-3xl
                  text-pink-500 hover:scale-110 duration-200 rounded-full -[2px] cursor-pointer"
                  />
                  <BiLogoTailwindCss className="text-xl md:text-3xl text-blue-400 hover:scale-110 duration-200 rounded-full -[2px] cursor-pointer" />
                  <RiJavascriptFill className="text-xl md:text-3xl text-amber-300 hover:scale-110 duration-200 rounded-full -[2px] cursor-pointer" />
                  <FaReact className="text-xl md:text-3xl text-sky-400 hover:scale-110 duration-200 rounded-full -[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/*Right Section */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 mb-4 order-1 md:order-none flex justify-center">
            <img
              src={pic}
              alt="Profile"
              className="rounded-full size-60 md:size-[450px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
