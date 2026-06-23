import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {registerUser,updateUserProfile} = useAuth();

   const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = (data) => {
    console.log("Register", data.photo[0]);

const profileImg = data.photo[0];


    registerUser(data.email, data.password)
    .then(result => {
      console.log(result.user);


      // 1. store the image in form data
      const formData = new FormData();
      formData.append('image', profileImg);

      // 2.send the photo to store and get the URL
      const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

      axios.post(image_API_URL, formData)
      .then(res => {
        console.log('after img res',res.data.data.url )
// update user profile to firebase
const userProfile = {
  displayName: data.name,
  photoURL: res.data.data.url
}
updateUserProfile(userProfile)
.then(() => {
  console.log('user profile updated done')
  navigate(location.state || '/');
})
.catch(error => console.log(error))


      })
       
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <div className="w-full max-w-md">
      <h3 className="text-4xl font-bold mb-1 text-black">Create an Account</h3>
      <p className="text-gray-500 mb-8">Register with RouteX</p>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name field  */}
          <label className="label">Name</label>
          <input
            type="name"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Name"
          />
            {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          {/* photo field  */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input w-full"
            placeholder="Your Photo"
          />
            {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
          )}
          {/* email field  */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password fields  */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have with at least one uppercase, at least one
              lowercase, at least one number and at least one special characters
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          
          <button className="btn btn-neutral mt-4">Register</button>
          <p className="">Already have an account? <Link state={location.state} to="/login" className="text-secondary">Login </Link></p>
        </fieldset>
      </form>

      <SocialLogin/>
    </div>
  );
};

export default Register;
