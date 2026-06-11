import Navbar from "./components/layout/homeLayout/navbar";
import React, { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <>
      <Home dark={dark} setDark={setDark}></Home>
    </>
  );
}

export default App;
