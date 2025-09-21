import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import tailwind from "../../public/tailwind.png";
import bootstrap from "../../public/Bootstrap.png";
import js from "../../public/javascript.png";
import react from "../../public/reactjs.png";

export const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      runUrl: "https://centralcare.netlify.app/",
      sourceUrl: "https://github.com/raman-sagar/Clinic-management-system",
      text: `Clinic Management System.Fully Functional Mega Project using HTML CSS and JavaScript.
      To understand the working of this project.
      Go to source code and open the 'Clinic management System.docx' file.
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
      runUrl: "https://googleclone9389.netlify.app/src/index.html",
      sourceUrl: "https://github.com/raman-sagar/Google-Clone",
      text: `I have created google clone home page using HTML and Tailwind only.In this portfolio,I have also used Tailwind css for styling.And My Other mini projects also include tailwind for styling.
      Click On 'Run Code' Button to run the mini-project. 
      Click On 'Source Code' Button to view the source code `,
    },
    {
      id: 4,
      logo: bootstrap,
      name: "Bootstrap",
      runUrl: "#",
      sourceUrl: "#",
      text: "Comming Soon",
    },
    {
      id: 5,
      logo: js,
      name: "javascript",
      runUrl: "https://raman-gym.netlify.app/",
      sourceUrl: "https://github.com/raman-sagar/gym-management-system",
      text: `Gym Management System.Fully Functional Mega Project using HTML CSS and JavaScript.
      To understand the working of this project.
      Go to source code and open the 'Gym management System.docx' file.
      Click On 'Run Code' Button to run the Project 
      Click On 'Source Code' Button to view the source code `,
    },
    {
      id: 6,
      logo: react,
      name: "React",
      runUrl: "#",
      sourceUrl: "https://github.com/raman-sagar/Portfolio",
      text: "coming soon",
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
              className=" rounded-lg  p-1 cursor-pointer bg-emerald-400 relative hover:bg-rose-300  shadow-2xl/30 duration-400 border border-emerald-600 hover:scale-102"
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
                <pre
                  className="cardText"
                  style={{ scrollbarColor: " transparent transparent" }}
                >
                  {text}
                </pre>
                {/* button container */}
                <div class="relative  bottom-0 left-0 right-0">
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
