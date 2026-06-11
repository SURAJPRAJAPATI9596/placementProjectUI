import Navbar from "./components/layout/homeLayout/navbar";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Job from "./pages/job";
import Resources from "./pages/resources";
import Resume from "./pages/resume";
function App() {
  const [dark, setDark] = useState(true);
  return (
    <>
      <Routes>
        <Route
          path="/placementProjectUI/"
          element={<Home dark={dark} setDark={setDark}></Home>}
        ></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/job" element={<Job />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
