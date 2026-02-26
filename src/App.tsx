import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import Valorant from "./Pages/Valorant";
import Brawlhalla from "./Pages/Brawlhalla";
import Buckshot from "./Pages/Buckshot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="valorant" element={<Valorant />} />
        <Route path="brawlhalla" element={<Brawlhalla />} />
        <Route path="buckshot" element={<Buckshot />} />
      </Route>
    </Routes>
  );
}

export default App;