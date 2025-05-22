import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentNodes } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../providers/AuthContext";
import toast from "react-hot-toast";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogout = () => {
    LogOut()
      .then(() => {
        toast.success("logged out");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div
      className={` bg-base-100 dark:bg-gray-900 ${
        theme === "dark" ? "bg-neutral text-white" : "bg-base-100 text-black"
      }`}
    >
      <div
        className={` lg: w-11/12 mx-auto navbar ${
          theme === "dark" ? "bg-neutral text-white" : "bg-base-100 text-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-700"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/find-tutors"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-700"
                }
              >
                Find Tutors
              </NavLink>
              <NavLink
                to="/add-tutorials"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-700"
                }
              >
                Add Tutorials
              </NavLink>
              <NavLink
                to="/my-tutorials"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-700"
                }
              >
                My Tutorials
              </NavLink>
              <NavLink
                to="/my-booked-tutors"
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-gray-700"
                }
              >
                My booked tutors
              </NavLink>
            </ul>
          </div>

          <Link className="btn btn-ghost text-xl">
            <FontAwesomeIcon
              icon={faCommentNodes}
              style={{ color: "#e85351" }}
            />{" "}
            Fluentro
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-4 menu menu-horizontal px-1 flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/find-tutors"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : ""
              }
            >
              Find Tutors
            </NavLink>
            <NavLink
              to="/add-tutorials"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : ""
              }
            >
              Add Tutorials
            </NavLink>
            <NavLink
              to="/my-tutorials"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : ""
              }
            >
              My Tutorials
            </NavLink>
            <NavLink
              to="/my-booked-tutors"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : ""
              }
            >
              My booked tutors
            </NavLink>
          </ul>
        </div>

        {!user && (
          <li className="navbar-end">
            <button className="btn btn-sm  border-0" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <div className="navbar-end">
            <button className="btn btn-sm  border-0" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="mt-2">
                  <h2>{user?.displayName}</h2>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
