import React, { useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      const displayUsername = storedUsername.split('@')[0];
      setUsername(displayUsername);
      
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/signin'); 
  };

  return (
    <div className="flex justify-center items-center pt-2">
    <div className="flex flex-row  p-2 shadow-2xl rounded-full w-1/2 justify-between bg-blue-300 items-center px-10">
      <div className="flex flex-row items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" width={40} height={40} />
        <h1 className="text-2xl font-bold">Paytm Wallet</h1>
      </div>
      <div className="flex flex-row items-center "> 
        <img src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" width={30} height={30} className="rounded-full bg-white" />
        {username && (
          <h1 className="text-black text-lg font-semibold ml-4 hidden md:block">
            Hello, {username}
          </h1>
        )}
        <button className="bg-blue-900 text-white p-2 rounded-full shadow-xl ml-8 px-4" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
    </div>
  );
}
