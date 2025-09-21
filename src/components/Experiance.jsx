import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import tailwind from "../../public/tailwind.png";
import bootstrap from "../../public/Bootstrap.png";
import js from "../../public/javascript.png";
import react from "../../public/reactjs.png";

export const Experiance = () => {
  const cardItem = [
    { id: 1, logo: html, name: "HTML", text: "Minimum 2 Years Experiance" },
    { id: 2, logo: css, name: "CSS", text: "Minimum 2 Years Experiance" },
    {
      id: 3,
      logo: tailwind,
      name: "Tailwind",
      text: "Minimum 1 Year Experiance",
    },
    { id: 4, logo: bootstrap, name: "Bootstrap", text: "Less than 1 year" },
    { id: 5, logo: js, name: "javascript", text: "Minimum 1 Year Experiance" },
    { id: 6, logo: react, name: "React", text: "Minimum 1 Year Experiance" },
  ];
  return (
    <>
      <div
        name="Experiance"
        className="max-w-screen container mx-auto py-4 px-4 md:px-20"
      >
        <h1 className="text-center md:text-start text-xl md:text-2xl font-extrabold tracking-wider bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Experiance
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mt-4">
          {cardItem.map(({ id, logo, name, text }) => (
            <div
              key={id}
              className="border-[3px] border-gray-500 bg-purple-900 hover:bg-fuchsia-600 rounded-lg shadow-2xl/30 p-1 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 duration-300"
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="size-30 mt-1 p-1 border-[5px] border-cyan-500 rounded-full bg-rose-600"
                />
              </div>
              <div>
                <div className="font-bold text-center text-green-500 my-2">
                  {name}
                </div>
                <p className=" text-center font-bold px-2 py-1 text-lime-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
