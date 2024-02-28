import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
  };
  return (
    <>
      <div className="flex justify-between text-white h-[10vh] mx-auto max-w-[1000px]">
        <p className="font-semibold text-xl">Delve into DelVery</p>
        <div className="flex justify-between w-[30%]">
          {auth?.name ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to={"/login"} className="text-lg">
                Login
              </Link>
              <Link to={"/register"} className="text-lg">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
