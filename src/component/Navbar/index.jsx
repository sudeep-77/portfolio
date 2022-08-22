import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md-sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0"
        >
          Sudeep
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#connect" className="mr-5 hover:text-white">
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
