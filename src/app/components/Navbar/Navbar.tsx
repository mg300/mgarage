import React from "react";
import Logo from "../Logo";

function Navbar() {
  return (
    <div className="flex justify-between bg-none m-5 items-center">
      <Logo />
      <div>
        <button className="mr-10 hidden md:inline cursor-pointer hover:text-gray-700  font-semibold ">Home</button>
        <button className="mr-10 hidden md:inline cursor-pointer hover:text-gray-700  font-semibold ">Service</button>
        <button className="mr-10 hidden md:inline cursor-pointer hover:text-gray-700  font-semibold ">
          Contact us
        </button>
        <button className="mr-10 cursor-pointer hover:text-gray-700  font-bold border-collapse text-logo">
          Umów wizytę
        </button>
      </div>
    </div>
  );
}

export default Navbar;
