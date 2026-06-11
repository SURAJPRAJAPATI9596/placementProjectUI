import React, { useState } from "react";
import logo from "../../../assets/HeroImg/logo.png";
import Button from "@mui/material/Button";
import { GiHamburgerMenu, GiHidden } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

const Navbar = ({ dark, setDark }) => {
  const [menu, setMenu] = useState(false);
  const [resourceAnchor, setResourceAnchor] = useState(null);
  const [resumeAnchor, setResumeAnchor] = useState(null);
  const [jobAnchor, setJobAnchor] = useState(null);

  const handleResourceOpen = (event) => {
    setResourceAnchor(event.currentTarget);
  };

  const handleResumeOpen = (event) => {
    setResumeAnchor(event.currentTarget);
  };

  const handleJobOpen = (event) => {
    setJobAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setResourceAnchor(null);
    setResumeAnchor(null);
    setJobAnchor(null);
  };

  return (
    <>
      <div
        className={`hidden lg:flex w-full justify-around text-sm md:text-lg  ${dark ? "bg-black text-white" : "bg-[#B2AFD3] text-black"}`}
      >
        <div className="flex justify-around w-[50%]">
          <img src={logo} alt="" className="h-12.5 rounded-4xl" />
          <span className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-shadow-white font-bold bg-blue-600" : ""
              }
            >
              Home
            </NavLink>
          </span>
          <span>
            <span className="cursor-pointer" onClick={handleResourceOpen}>
              <NavLink to="/">Resources ▼</NavLink>
            </span>
          </span>
          <Menu
            anchorEl={resourceAnchor}
            open={Boolean(resourceAnchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Notes</MenuItem>
            <MenuItem onClick={handleClose}>Free Courses</MenuItem>
            <MenuItem onClick={handleClose}>Roadmaps</MenuItem>
            <MenuItem onClick={handleClose}>Interview Preparation</MenuItem>
            <MenuItem onClick={handleClose}>Aptitude Preparation</MenuItem>
          </Menu>
          <span className="cursor-pointer" onClick={handleResumeOpen}>
            <NavLink to="/resume">Resume ▼</NavLink>
          </span>
          <span className="cursor-pointer" onClick={handleJobOpen}>
            <NavLink to="/jobs"></NavLink>
            Jobs ▼
          </span>
          <span className="cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              {/* text-shadow-white font-bold bg-blue-600 */}
              About
            </NavLink>
          </span>
          {dark ? (
            <span onClick={() => setDark(!dark)} className="cursor-pointer">
              <CiLight className="h-10 w-10" />
            </span>
          ) : (
            <span onClick={() => setDark(!dark)} className="cursor-pointer">
              <MdDarkMode className="h-10 w-10" />
            </span>
          )}
        </div>
        <div>
          <Button variant="contained">sinUp</Button>
          <Button variant="outlined">Login</Button>
        </div>
      </div>
      {menu ? (
        <span className="lg:hidden absolute" onClick={() => setMenu(!menu)}>
          <ImCross
            className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}
          />
        </span>
      ) : (
        <span className={`lg:hidden absolute`} onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu
            className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}
          />
        </span>
      )}
      <div
        className={`h-screen w-60 border border-black 0 lg:hidden flex flex-col justify-between md:text-lg text-sm pt-6 ${!menu ? "hidden" : "block"} ${dark ? "bg-black text-white" : "bg-white text-black"} `}
      >
        <div className={`flex flex-col justify-around h-[60%] pl-3 `}>
          <img src={logo} alt="" className="h-12.5 rounded-4xl" />
          <span>HOME</span>
          <span>
            <span className="cursor-pointer" onClick={handleResourceOpen}>
              Resources ▼
            </span>
          </span>
          <Menu
            anchorEl={resourceAnchor}
            open={Boolean(resourceAnchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Notes</MenuItem>
            <MenuItem onClick={handleClose}>Free Courses</MenuItem>
            <MenuItem onClick={handleClose}>Roadmaps</MenuItem>
            <MenuItem onClick={handleClose}>Interview Preparation</MenuItem>
            <MenuItem onClick={handleClose}>Aptitude Preparation</MenuItem>
          </Menu>
          <span className="cursor-pointer" onClick={handleResumeOpen}>
            Resume ▼
          </span>
          <Menu
            anchorEl={resumeAnchor}
            open={Boolean(resumeAnchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Create Resume</MenuItem>

            <MenuItem onClick={handleClose}>ATS Score</MenuItem>
          </Menu>
          <span className="cursor-pointer" onClick={handleJobOpen}>
            Jobs ▼
          </span>
          <Menu
            anchorEl={jobAnchor}
            open={Boolean(jobAnchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Job Board</MenuItem>

            <MenuItem onClick={handleClose}>Saved Jobs</MenuItem>
          </Menu>
          <span>About</span>
          {dark ? (
            <span onClick={() => setDark(!dark)}>
              <CiLight className="h-10 w-10" />
            </span>
          ) : (
            <span onClick={() => setDark(!dark)}>
              <MdDarkMode className="h-10 w-10" />
            </span>
          )}
        </div>
        <div>
          <Button variant="outlined">Login</Button>
          <Button variant="contained">sinUp</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
