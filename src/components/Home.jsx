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

import pic from "../../public/profile1.jpg";

export const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen border-b-2 border-b-fuchsia-500 container mx-auto px-4 md:px-20 mt-16"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24  space-y-2 order-2 md:order-none">
            <span className="text-xl text-zinc-500">Welcome In My Feed</span>
            {/* Developer*/}

            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="text-stone-500 ">Hello,I'm a </h1>

              <ReactTyped
                className="bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent font-bold break-all"
                strings={["Raman Sagar", "Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <div className="text-base tracking-wider text-fuchsia-600 md:text-medium text-justify">
              <br />
              Hello, I'm Raman Sagar, a passionate web developer with a keen eye
              frontend development. With a background in computer science, I
              strive to create impactful and visually stunning website solutions
              that leave a lasting impression. Proficient in JavaScript and
              React Experienced with Web development Tools/Technologies. Strong
              grasp of Web Design Principles/Concepts. Excellent problem-solving
              skills. Effective communicator and collaborator. My mission is to
              leverage my skills and creativity to deliver innovative JavaScript
              and React solutions that exceed client expectations and contribute
              positively to the digital landscape. I am committed to continuous
              learning and growth, always seeking new challenges and
              opportunities to expand my horizons.
              <p>If you give me a chance to work in your company,I will gain more experiance and take your company to heights.</p>
            </div>
            <br></br>

            <div className="flex flex-wrap items-center flex-col space-y-6 md:space-y-0  md:flex-row justify-between  ">
              {/*Social Media Icons */}
              <div className="space-y-2 ">
                <h1 className="text-center bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent font-bold">
                  Available on
                </h1>
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
                <h1 className="bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent font-bold">
                  Currently working on
                </h1>

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
            {/*Profile*/}
            <img
              src={pic}
              alt="Profile"
              className="rounded-lg size-60 md:size-[450px] border-2 border-cyan-400"
            />
            {/*Profile */}
          </div>
        </div>
      </div>
    </>
  );
};
