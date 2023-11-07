"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="absolute top-0 w-full flex justify-between bg-none h-24 px-6 items-center">
      <Link href="/" className="mt-4 cursor-pointer ">
        <Image alt="abc" src="/darkLogo.png" width={220} height={150} />
      </Link>

      <div>
        <button
          className={`mr-10 ${
            pathname === "/" ? "hidden" : ""
          } text-lg md:inline cursor-pointer hover:text-gray-700  font-semibold `}
        >
          O nas
        </button>
        <button
          className={`mr-10 text-lg ${
            pathname === "/" ? "hidden" : ""
          } md:inline cursor-pointer hover:text-gray-700  font-semibold `}
        >
          Usługi
        </button>
        <button
          className={`mr-10  text-lg hidden
          md:inline cursor-pointer hover:text-gray-700  font-semibold `}
        >
          Skontaktuj się
        </button>
        {pathname === "/" && (
          <button className="lg:mr-10 text-lg cursor-pointer hover:text-gray-700  font-bold border-collapse text-logo">
            Umów wizytę
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
