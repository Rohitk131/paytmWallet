import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
        username,
        firstName,
        lastName,
        password
      });
      localStorage.setItem("token", response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error("There was an error signing up:", error);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center px-5 lg:px-0 bg-gradient-to-r from-blue-500 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/background-pattern.svg')] bg-no-repeat bg-center bg-cover"></div>
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-md w-full lg:w-1/2">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-transparent text-blue-500">
              Paytm Wallet
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Hey, enter your details to create your account
            </p>
          </div>
          <div className="w-full mt-8">
            <div className="flex flex-col gap-6">
              <input
                className="w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                type="text"
                placeholder="Enter your first name"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                className="w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                type="text"
                placeholder="Enter your last name"
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                className="w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:bg-white transition-all"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="mt-5 tracking-wide font-semibold bg-blue-500 text-white w-full py-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={handleSignUp}
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
                <span className="ml-3">Sign Up</span>
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Already have an account?{" "}
                <a href='/signin'>
                  <span className="text-purple-600 font-semibold">Sign in</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
