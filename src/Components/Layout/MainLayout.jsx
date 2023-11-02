import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
         <Navbar></Navbar>
        </div>
        <div>{children}</div>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
};

MainLayout.propTypes = {
  children: propTypes.node,
};

export default MainLayout;
