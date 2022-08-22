import React from "react";
import { ChipIcon } from "@heroicons/react/solid";

const Connect = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Connect
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Want to collaborate with me? Talk with me with any of the link below
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <a
                href="https://www.instagram.com/sp6358"
                className="title-font font-medium text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <a
                href="https://www.instagram.com/sp6358"
                className="title-font font-medium text-white"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <a
                href="https://www.instagram.com/sp6358"
                className="title-font font-medium text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
