import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function LayoutNavBar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full h-20 
      bg-gray-900 text-white 
      flex justify-between items-center 
      px-10 text-xl 
      z-50 shadow-md"
    >
      <NavLink to="/">{<Logo />}</NavLink>

      <div className="flex gap-6">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/valorant">Valorant</NavLink>
        <NavLink to="/brawlhalla">Brawlhalla</NavLink>
        <NavLink to="/buckshot">Buckshot</NavLink>
      </div>
    </nav>
  );
}

export default LayoutNavBar;
