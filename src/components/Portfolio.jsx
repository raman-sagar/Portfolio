import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import tailwind from "../../public/tailwind.png";
import bootstrap from "../../public/Bootstrap.png";
import js from "../../public/javascript.png";
import react from "../../public/reactjs.png";

import "./Portfolio.css";

export const Portfolio = () => {
  const cardItem = [
    { id: 1, logo: html, name: "HTML", text: "yah html hai" },
    { id: 2, logo: css, name: "CSS", text: "yah css hai" },
    { id: 3, logo: tailwind, name: "Tailwind", text: "yah tailwind hai" },
    { id: 4, logo: bootstrap, name: "Bootstrap", text: "yah bootstrap hai" },
    { id: 5, logo: js, name: "javascript", text: "yah javascript hai" },
    { id: 6, logo: react, name: "React", text: "yah react hai" },
  ];
  return (
    <>
      c
      <div
        name="Portfolio"
        className="max-w-screen container mx-auto py-4 px-4 md:px-20 "
        id="card"
      >
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wider bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          PortFolio
        </h1>
        <span
          className="text-lg font-medium cursor-pointer
        bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent "
        >
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mt-4">
          {cardItem.map(({ id, logo, name, text }) => (
            <div
              key={id}
              className="rounded-lg  p-1 cursor-pointer bg-emerald-400 relative card hover:bg-pink-400"
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="size-30 mt-1 p-1 border-[2px] rounded-full "
                />
              </div>
              <div>
                <div className="font-bold text-center my-2">{name}</div>
                <p className="px-2 py-1 text-gray-700">{text}</p>
                <div>
                  <button className="m-2 px-2 py-1 font-semibold bg-blue-400 text-white rounded-md cursor-pointer hover:bg-blue-600">
                    Video
                  </button>
                  <button className="m-2 px-2 py-1 font-semibold bg-green-400 text-white rounded-md cursor-pointer hover:bg-green-600">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
