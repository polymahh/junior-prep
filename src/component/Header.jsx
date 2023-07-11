import React from "react";

const Header = () => {
  return (
    <header className="w-full ">
      {/* nav */}
      <nav className="flex items-center justify-between py-4 pl-8 pr-6 shadow-lg">
        <a href="/">
          {" "}
          <img src="logo.png" alt="" />
        </a>
        <ul className="flex items-center justify-between text-gray-600">
          <li className="mr-6">
            <a href="/">HTML</a>
          </li>
          <li className="mr-6">
            <a href="/">CSS</a>
          </li>
          <li className="mr-6">
            <a href="/">JavaScript</a>
          </li>
          <li className="mr-6">
            <a href="/">React</a>
          </li>
          <li className="mr-6">
            <a href="/">Teams</a>
          </li>
        </ul>
        <button className="px-4 py-2 font-bold text-white bg-[#57007B] rounded hover:bg-blue-700">
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
