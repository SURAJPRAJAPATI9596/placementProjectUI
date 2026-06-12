import Navbar from "./components/layout/homeLayout/navbar";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Job from "./pages/job";
import Resources from "./pages/resources";
import Ats from "./pages/resume/Ats";
import Resume from "./pages/resume/Resume";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route
          path="/"
          element={<Home dark={dark} setDark={setDark}></Home>}
        ></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/job" element={<Job />}></Route>
        <Route path="/about" element={<About dark={dark} />}></Route>
        <Route path="/resume/ats" element={<Ats />}></Route>
        <Route path="/resume/resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
}

export default App;
