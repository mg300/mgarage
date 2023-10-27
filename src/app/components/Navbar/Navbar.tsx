import React from "react";
import Logo from "../Logo";

function Navbar() {
  return (
    <div className="absolute top-0 w-full flex justify-between bg-none h-24 px-6 items-center">
      <Logo color="text-black" />
      <div>
        <button className="mr-10 hidden text-lg md:inline cursor-pointer hover:text-gray-700  font-semibold ">
          O nas
        </button>
        <button className="mr-10 text-lg hidden md:inline cursor-pointer hover:text-gray-700  font-semibold ">
          Usługi
        </button>
        <button className="mr-10  text-lg hidden md:inline cursor-pointer hover:text-gray-700  font-semibold ">
          Skontaktuj się
        </button>
        <button className="mr-10 text-lg cursor-pointer hover:text-gray-700  font-bold border-collapse text-logo">
          Umów wizytę
        </button>
      </div>
    </div>
  );
}

export default Navbar;
