import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/images/authImage.png";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-full min-h-screen items-stretch">

      <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-between relative">

        <div className="mb-8">
          <Logo />
        </div>

        <div className="flex-1 flex items-center justify-center max-w-4xl mx-auto w-full">
          <Outlet />
        </div>
 
        <div className="hidden md:block h-8"></div>
      </div>

      <div className="hidden md:flex flex-1 bg-[#f7fbf7] items-center justify-center p-12">
        <img 
          src={authImage} 
          alt="Delivery Illustration" 
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
      
    </div>
  );
};

export default AuthLayout;
