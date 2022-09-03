import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/header/header";
import Home from "./components/home/home";
import SingIn from "./components/authorization/singIn";
import SingUp from "./components/authorization/singUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
