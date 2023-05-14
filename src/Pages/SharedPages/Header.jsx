/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthPages/AuthPorvider";

const Header = () => {
  const { user, Login, Logout } = useContext(AuthContext);

  const handleLogout = () => {
    Logout()
      .then(() => {
        console.log("Log out successfully");
        localStorage.removeItem("car-access-token")
      })
      .catch((error) => console.log(error));
  };
  const navList = (
    <>
      <li className="text-dark-2 font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-dark-2 font-semibold">
        <Link>About</Link>
      </li>
      <li className="text-dark-2 font-semibold">
        <Link>Services</Link>
      </li>
      <li className="text-dark-2 font-semibold">
        <Link>Blog</Link>
      </li>
      <li className="text-dark-2 font-semibold">
        <Link>Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100  pt-5 mb-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <Link to="/" className="">
            <img src={logo} alt="" className="h-24" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          {
            // user ? <Link onClick={handleLogout} className="mx-4 btn btn-outline border-2 hover:border-my-primary border-my-primary text-my-primary hover:bg-my-primary">Log out</Link>
            user ? (
              <div className="dropdown dropdown-hover text-my-primary">
                <label tabIndex={0} className="btn mx-2 bg-my-primary  hover:border-my-primary border-my-primary hover:text-my-primary hover:bg-white">
                  Profile
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                  <Link to="/bookings" className=" text-my-primary hover:bg-my-primary hover:text-white">My Bookings</Link>
                  </li>
                  <li>
                  <Link onClick={() => handleLogout()} className=" text-my-primary hover:bg-my-primary hover:text-white">Log out</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="mx-4 btn btn-outline border-2 hover:border-my-primary border-my-primary text-my-primary hover:bg-my-primary"
              >
                Log in
              </Link>
            )
          }
          <a className="btn btn-outline border-2 hover:border-my-primary border-my-primary text-my-primary hover:bg-my-primary">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
