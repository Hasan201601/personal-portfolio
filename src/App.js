import { useState } from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import Menu from "./components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
    </div>
  );
}

export default App;
