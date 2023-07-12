import React, { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="flex justify-center md:hidden ">
      <div className="relative ">
        <button
          onClick={handleMenu}
          className="relative z-10 block p-2 bg-white rounded-md focus:outline-none"
        >
          <HiMenu style={{ width: "20px", height: "20px" }} />
        </button>

        <div
          className={`absolute right-0 top-[38px] mt-2 w-36 bg-white rounded-md shadow-lg overflow-hidden z-20 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <div className="py-2">
            <a
              href="#"
              className="flex items-center px-4 py-3 -mx-2 hover:bg-gray-100"
            >
              HTML
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 -mx-2 hover:bg-gray-100"
            >
              CSS
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 -mx-2 hover:bg-gray-100"
            >
              JavaScript
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 -mx-2 hover:bg-gray-100"
            >
              React
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-3 -mx-2 border-b hover:bg-gray-100"
            >
              Teams
            </a>
            <div className="flex items-center justify-center px-4 py-3 -mx-2 hover:bg-gray-100">
              <button className=" px-4 py-2 font-bold text-white bg-[#57007B] rounded hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
