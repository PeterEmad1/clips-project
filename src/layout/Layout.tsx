import { Outlet, NavLink } from "react-router-dom";
import Logo from "../Logo";

function Layout() {
  return (
    <div
      className="min-h-dvh flex flex-col 
                bg-[radial-gradient(circle,#1e293b,#0f172a,#020617)] 
                "
    >
      {/* NAVBAR */}

      <nav className="bg-gray-900 p-4 flex justify-between items-center px-10 text-xl">
        <Logo />
        <div className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/valorant">Valorant</NavLink>
          <NavLink to="/brawlhalla">Brawlhalla</NavLink>
          <NavLink to="/buckshot">Buckshot</NavLink>
        </div>
      </nav>

      {/* THIS IS REQUIRED */}
      <Outlet />
    </div>
  );
}

export default Layout;
