import { Link } from "react-scroll";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import pic from "../../public/photo.avif";
export const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen container mx-auto px-0 md:px-20 shadow-xl h-16 fixed top-0 left-0 right-0 bg-purple-900 z-10 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 px-4 ">
            <img className="size-12 rounded-full" src={pic} alt="Profile" />
            <h1 className="text-xl font-extrabold cursor-pointer bg-linear-to-r from-red-500 via-pink-500 to-emerald-500 bg-clip-text text-transparent">
              Raman<span> Sagar</span>
              <p className="text-base font-normal">web Developer</p>
            </h1>
          </div>
          {/*desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-3 text-sky-300">
              {navItems.map((obj) => (
                <li
                  key={obj.id}
                  className="hover:scale-105 duration-300 cursor-pointer font-medium"
                >
                  <Link
                    to={obj.text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {obj.text}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Burger */}
            <div
              className="md:hidden px-4 cursor-pointer text-sky-300"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoMenu size={24} /> : <IoMdClose size={24} />}
            </div>
          </div>
        </div>

        {/*mobile navbar */}
        {!menu && (
          <div className="h-40 w-full bg-green-300 rounded-b-md px-4">
            <ul className=" md:hidden h-screen flex flex-col space-y-2 text-sky-600 ">
              {navItems.map((obj) => (
                <li
                  key={obj.id}
                  className="hover:scale-x-102 duration-300 cursor-pointer font-medium"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={obj.text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {obj.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
