import React from "react";
import Title from "./Title";

function Coursework() {
  return (
    <div className="flex items-center justify-center flex-col text-center mb-5 mx-auto">
      <Title>Skills and Coursework</Title>

      <div className="p-3 flex justify-center items-center px-20">
        {/* Programming Courses */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-3">
          <h1 className="inline-block py-2 border-2 border-stone-900 rounded-md overflow-hidden">
            <a className="text-2xl">Programming Courses</a>
            <ul className="text-xl flex flex-wrap">
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Intro to Programming
              </li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Data Structures and Analysis
              </li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Discrete Structures
              </li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Foundations of Programming
              </li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Foundations of Software Engineering
              </li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Systems Fundamentals
              </li>
            </ul>
          </h1>
        </div>

        {/* Languages and Frameworks */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-3">
          <h1 className="inline-block py-2 border-2 border-stone-900 rounded-md overflow-hidden w-full lg:w-1/8 p-3">
            <a className="text-2xl">Languages and Frameworks</a>
            <ul className="text-xl flex flex-wrap ">
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Python</li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Javascript</li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                React/Tailwind</li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Java</li>
              <li className="w-full md:w-1/2 lg:w-1/2 p-3">
                Typescript/Angular
              </li>
            </ul>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Coursework;
