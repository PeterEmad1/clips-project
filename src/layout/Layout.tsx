import { Outlet} from "react-router-dom";
import LayoutNavBar from "../components/LayoutNavBar";

function Layout() {
  return (
    <div
      className="min-h-dvh flex flex-col 
                bg-[radial-gradient(circle,#1e293b,#0f172a,#020617)] 
                "
    >
      {/* NAVBAR */}

      <LayoutNavBar />

      {/* THIS IS REQUIRED */}
      <Outlet />
    </div>
  );
}

export default Layout;
