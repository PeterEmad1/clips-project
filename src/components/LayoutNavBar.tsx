import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function LayoutNavBar() {
  return (
    <nav className="bg-gray-900 py-6 flex justify-between items-center px-10 text-xl">
      <Logo />
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/valorant">Valorant</NavLink>
        <NavLink to="/brawlhalla">Brawlhalla</NavLink>
        <NavLink to="/buckshot">Buckshot</NavLink>
      </div>
    </nav>
  );
}

export default LayoutNavBar;
