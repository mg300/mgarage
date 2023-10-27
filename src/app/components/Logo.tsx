import React from "react";

function Logo({ color }: { color: string }) {
  const textColorClass = `text-xl ${color} font-normal`;

  return (
    <div className="font-logo cursor-pointer group">
      <span className="text-logo text-6xl font-bold group-hover:text-red-600 tracking-tight">MG</span>
      <span className={textColorClass}>arage</span>
    </div>
  );
}
export default Logo;
