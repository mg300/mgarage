import React from "react";
import Logo from "../Logo";

function Navbar() {
  return (
    <div>
      <Logo />
      <button>Home</button>
      <button>Service</button>
      <button>Contact us</button>
      <button>Umów wizyte</button>
    </div>
  );
}

export default Navbar;
