import React from "react";

export const About = () => {
  return (
    <>
      <div
        name="About"
        className="max-w-screen container mx-auto px-4 md:px-20 my-10"
      >
        <h1 className="text-xl md:text-2xl bg-linear-to-r/longer from-emerald-500 to-rose-400 bg-clip-text  text-transparent font-extrabold tracking-wider ">
          About (About For Me)
        </h1>
        <p className="text-violet-700 ">
          Hello, I'm{" "}
          <span className="underline decoration-2 decoration-dotted decoration-purple-600 text-violet-900 cursor-grab">
            {" "}
            Raman Sagar
          </span>
          , a passionate web developer with a keen eye
          <span className="underline decoration-2 decoration-dotted decoration-purple-600 text-violet-900 cursor-grab">
            {" "}
            frontend development
          </span>
          . With a background in{" "}
          <span className="underline decoration-2 decoration-dotted decoration-purple-600 text-violet-900 cursor-grab">
            {" "}
            computer science
          </span>
          , I strive to create impactful and visually stunning website solutions
          that leave a lasting impression.
        </p>
        <br />

        <h1 className="text-xl font-semibold bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Education & Training
        </h1>
        <div className="text-violet-700">
          <p>
            [10th/Certification],[82.3% Percentage],[PCM],[In 2020],[ Bharat
            Inter College Bhojipura,Bareilly,Uttar Pradesh]
          </p>
          <p>
            [12th/Certification],[83.2% Percentage],[PCM],[In 2022],[ Bharat
            Inter College Bhojipura,Bareilly,Uttar Pradesh]
          </p>
          <p>
            [B.Tech (CS)/Certification], [ Shree Siddhi Vinayak Group of
            Institution,Bareilly],[ Affiliated with AKTU], [2026]
          </p>
        </div>
        <br />
        <br />
        <h1 className="text-xl font-semibold bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <span className="text-violet-700">
          Proficient in{" "}
          <span className="underline decoration-2 decoration-dotted decoration-purple-600 text-violet-900 cursor-grab">
            JavaScript and React
          </span>{" "}
          Experienced with Web development Tools/Technologies. Strong grasp of
          Web Design Principles/Concepts. Excellent problem-solving skills.
          Effective communicator and collaborator
        </span>
        <br />
        <br />
        <h1 className="text-xl font-semibold bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <span className="text-violet-700">
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br />
        <br />

        <h1 className="text-xl font-semibold bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Achievements & Awards
        </h1>
        <span className="text-violet-700">
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span>
        <br />
        <br />
        <h1 className="text-xl font-semibold bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
          Mission Statement
        </h1>
        <p className="text-violet-700">
          My mission is to leverage my skills and creativity to deliver
          innovative{" "}
          <span className="underline decoration-2 decoration-dotted decoration-purple-600 text-violet-900 cursor-grab">
            JavaScript and React{" "}
          </span>
          solutions that exceed client expectations and contribute positively to
          the digital landscape. I am committed to continuous learning and
          growth, always seeking new challenges and opportunities to expand my
          horizons.
        </p>
      </div>
    </>
  );
};
