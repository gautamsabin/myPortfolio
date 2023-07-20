import React, { useState } from "react";
import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Routing from "./routing/Routing";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Routing />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
