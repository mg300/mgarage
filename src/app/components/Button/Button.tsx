import React from "react";

function Button({
  children,
  color,
  type = "button",
  onClick,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  color: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white bg-gradient-to-r ${
        color === "red" ? " from-logo to-red-900" : "from-blue-600 to-blue-900"
      } hover:bg-gradient-to-tl font-semibold rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 font-sans focus:ring-4`}
    >
      {children}
    </button>
  );
}

export default Button;
