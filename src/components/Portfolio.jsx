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
    {
      id: 1,
      logo: html,
      name: "HTML",
      runUrl: "https://centralcare.netlify.app/",
      sourceUrl: "https://github.com/raman-sagar/Clinic-management-system",
      text: `Clinic Management System.Fully Functional Mega Project using HTML CSS and JavaScript.
      Click On 'Run Code' Button to run the Project 
      Click On 'Source Code' Button to view the source code `,
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      runUrl: "https://carousel9389.netlify.app/",
      sourceUrl: "https://github.com/raman-sagar/carousel",
      text: `I have created Carousel using HTML and CSS only.Some new properties are used like 'anchor-name','position-area','scroll-snap-align','scroll-snap-type' and many more.
      Click On 'Run Code' Button to run the Project 
      Click On 'Source Code' Button to view the source code `,
    },
    {
      id: 3,
      logo: tailwind,
      name: "Tailwind",
      runUrl: "https://googleclone9389.netlify.app/",
      sourceUrl: "https://github.com/raman-sagar/Google-Clone",
      text: "yah tailwind hai",
    },
    {
      id: 4,
      logo: bootstrap,
      name: "Bootstrap",
      runUrl: "#",
      sourceUrl: "#",
      text: "yah bootstrap hai",
    },
    {
      id: 5,
      logo: js,
      name: "javascript",
      runUrl: "https://raman-gym.netlify.app/",
      sourceUrl: "https://github.com/raman-sagar/gym-management-system",
      text: "yah javascript hai",
    },
    {
      id: 6,
      logo: react,
      name: "React",
      runUrl: "#",
      sourceUrl: "https://github.com/raman-sagar/Portfolio",
      text: "yah react hai",
    },
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen container mx-auto py-4 px-4 md:px-20 "
        id="card"
      >
        <h1 className="portFolio">PortFolio</h1>
        <p className="featured-project">Featured Projects</p>
        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mt-4">
          {/* Map method */}

          {cardItem.map(({ id, logo, name, runUrl, sourceUrl, text }) => (
            <div
              key={id}
              className=" rounded-lg  p-1 cursor-pointer bg-emerald-400 relative hover:bg-rose-400 card"
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="size-30 mt-1 p-1 border-[5px] border-purple-600 rounded-full bg-emerald-200"
                />
              </div>
              <div>
                <div className="font-bold text-center my-2 text-purple-600">
                  {name}
                </div>
                <pre className="px-2 py-1 font-sans text-gray-700 whitespace-pre-line">
                  {text}
                </pre>
                {/* button container */}
                <div>
                  <a href={runUrl} target="_blank" className="run-button">
                    Run Code
                  </a>
                  <a href={sourceUrl} target="_blank" className="code-button">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
