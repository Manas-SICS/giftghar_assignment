import React, { useState } from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="w-full flex items-center fixed top-0 z-20">
      <div className="w-full max-w-7xl flex justify-start items-center lg:mx-[64px] mx-[32px] lg:mt-[64px] mt-[32px]">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="h-16 object-contain" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
