import { Link } from "react-scroll";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
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
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen container mx-auto px-4 md:px-20 shadow-xl h-16 fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2  ">
            <img
              className="size-12 rounded-full"
              src="../../public/photo.avif"
              alt="Profile"
            />
            <h1 className="text-xl cursor-pointer font-semibold">
              Raman<span className="text-lime-400"> Sagar</span>
              <p className="text-sm font-normal">web Developer</p>
            </h1>
          </div>
          {/*desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-3">
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
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoMenu size={24} /> : <IoMdClose size={24} />}
            </div>
          </div>
        </div>

        {/*mobile navbar */}
        {!menu && (
          <div className=" bg-white">
            <ul className=" md:hidden h-screen flex flex-col items-center justify-center space-y-2 ">
              {navItems.map((obj) => (
                <li
                  key={obj.id}
                  className="hover:scale-105 duration-300 cursor-pointer font-medium"
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
