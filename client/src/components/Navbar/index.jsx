import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="h-[50px] bg-white shadow-2xl sticky top-0 z-[50] w-full flex justify-between items-center p-8">
      <Logo />
      <Searchbar />
      <div className="flex gap-6 items-center">
        <button
          onClick={() => {
            localStorage.removeItem("access_token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
