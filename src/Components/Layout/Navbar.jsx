import logo from '../../../src/assets/Images/clean.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" w-full max-w-[1300px] mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <img 
          className='w-[100px] mt-5 h-24'
          src={logo} alt="" />
        </div>
        <div className="flex-none hidden lg:block">
          <div className="flex gap-2 ">
          <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary rounded-md btn-sm"
                  : "btn btn-ghost rounded-md btn-sm"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary rounded-md btn-sm"
                  : "btn btn-ghost rounded-md btn-sm"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary rounded-md btn-sm"
                  : "btn btn-ghost rounded-md btn-sm"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary rounded-md btn-sm"
                  : "btn btn-ghost rounded-md btn-sm"
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Navbar;