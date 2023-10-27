import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-logo to-red-900 hover:bg-gradient-to-tl font-semibold rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 font-sans"
    >
      {children}
    </button>
  );
}

export default Button;
