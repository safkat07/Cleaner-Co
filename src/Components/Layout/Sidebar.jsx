
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  w-80 min-h-full bg-base-200">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "btn btn-primary " : "btn btn-ghost  "
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "btn btn-primary  " : "btn btn-ghost  "
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "btn btn-primary  " : "btn btn-ghost  "
            }
          >
            Login
          </NavLink>
        </ul>
      </div>
    );
};

export default Sidebar;