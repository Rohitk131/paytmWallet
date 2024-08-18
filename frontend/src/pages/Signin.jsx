import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username, 
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("There was an error signing in:", error);
    }
  };
  

  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
              Paytm Wallet
            </h1>
            <p className="text-[12px] text-gray-500">Welcome Back!</p>
          </div>
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs flex flex-col gap-4">
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={handleSignin}
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Log in</span>
              </button>
              <div className="mt-4 flex items-center w-full text-center">
                <a
                  href="/signup"
                  className="text-xs text-gray-500 capitalize text-center w-full"
                >
                  Don&apos;t have an account yet?
                  <span className="text-blue-700"> Sign Up</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
