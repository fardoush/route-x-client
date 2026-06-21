import React from "react";

import logo from "../../assets/images/logo.svg";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <div className="w-[37px] h-[48px] flex items-center justify-center">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <h3 className="font-extrabold text-3xl ms-2 tracking-tight text-base-content transition-colors duration-200">
        Route<span className="text-primary font-black">X</span>
      </h3>
    </Link>
  );
};

export default Logo;
