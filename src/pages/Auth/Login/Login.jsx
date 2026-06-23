import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  console.log('in the login page', location)

  const handleLogin = (data) => {
    console.log("login data: ", data);
    signInUser(data.email, data.password)
      .then((resqult) => {
        console.log(resqult.user);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <div className="w-full max-w-md">
      <h3 className="text-4xl font-bold mb-1 text-black">Welcome Back</h3>
      <p className="text-gray-500 mb-8">Login with RouteX</p>
      

      <form onSubmit={handleSubmit(handleLogin)} className="w-full space-y-4">
        
        {/* Email Field */}
        <div className="flex flex-col w-full">
          <label className="label text-gray-700 font-medium pb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full p-3 border rounded-lg focus:outline-none"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-sm mt-1">Email is required</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col w-full">
          <label className="label text-gray-700 font-medium pb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="input input-bordered w-full p-3 border rounded-lg focus:outline-none" 
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">
              Password must be 6 characters or longer
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="text-sm mt-1">
          <a className="link link-hover text-gray-500 text-xs">Forgot password?</a>
        </div>

        <button className="btn btn-neutral w-full bg-black text-white p-3 rounded-lg font-semibold mt-4 hover:bg-gray-800 transition-colors">
          Login
        </button>
        <p className="">Don’t have any account? <Link state={location.state} to="/register"  className="text-secondary">Register </Link></p>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Login;
