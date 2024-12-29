import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser } = useAuth();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("User registered successfully!");
      navigation("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.log(error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login successfully!");
      navigation("/");
    } catch (error) {
      setMessage("Error, please try again");
    }
  };
  return (
    <div className="h-[clac(100vh-120px)] border flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="Password "
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Sign Up
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven an account? Please
          <span>&nbsp;</span>
          <Link className="text-blue-500 hover:text-blue-700" to={"/login"}>
            Login
          </Link>
        </p>
        {/* google singin  */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary 
          hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:otline-none "
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
