import propTypes from "prop-types"
import { NavLink } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar ">
      <div className=" w-full max-w-[1300px] mx-auto">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <div className="flex gap-2 ">
          <NavLink to='/about' className={ ({isActive}) => isActive? "btn btn-primary rounded-md btn-sm"
        : "btn btn-ghost rounded-md btn-sm"  
        }>About</NavLink>
          <NavLink to='/contact' className={ ({isActive}) => isActive? "btn btn-primary rounded-md btn-sm"
        : "btn btn-ghost rounded-md btn-sm"  
        }>Contact</NavLink>
          <NavLink to='/login' className={ ({isActive}) => isActive? "btn btn-primary rounded-md btn-sm"
        : "btn btn-ghost rounded-md btn-sm"  
        }>Login</NavLink>
        </div>
      </div>
      </div>
    </div>
    <div>
    {children}
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
  );
};

MainLayout.propTypes ={
  children: propTypes.node
}

export default MainLayout;
