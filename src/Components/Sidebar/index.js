import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";

import "./index.css";
const Sidebar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("home");
  const [activeSideBar, setActiveSidebar] = useState(true);
  let screenSizeOf = window.innerWidth;
  const handleCloseSideBar = () => {
    if (activeSideBar !== undefined && screenSizeOf <= 900) {
      setActiveSidebar(false);
    }
  };

  const handleAll = (event) => {
    handleCloseSideBar();
    setActiveRoute(event.target.value);
  };

  useEffect(() => {
    handleCloseSideBar();
  }, [activeRoute]);

  return (
    <div>
      <div className="logoContainer">
        <button
          className="logoBurger"
          type="button"
          onClick={() => setActiveSidebar((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div
        className={activeSideBar ? "sidebarContainer" : "sidebarContainerNone"}
      >
        <Link to="/" className="linked">
          <button
            className={`${
              location.pathname === "/"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            } ${activeSideBar ? "activeSidebarbtn" : "noneSidebarBtn"}`}
            value="home"
            onClick={handleAll}
          >
            Home <FaHome />
          </button>
        </Link>

        <Link to="/cryptocurrency" className="linked">
          <button
            className={`${
              location.pathname === "/cryptocurrency"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            } ${activeSideBar ? "activeSidebarbtn" : "noneSidebarBtn"}`}
            value="cryptocurrency"
            onClick={handleAll}
          >
            cryptocurrency <SiHiveBlockchain />
          </button>
        </Link>

        <Link to="/populationgraph" className="linked">
          <button
            className={`${
              location.pathname === "/populationgraph"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            } ${activeSideBar ? "activeSidebarbtn" : "noneSidebarBtn"}`}
            value="populationgraph"
            onClick={handleAll}
          >
            PopulationGraph <SlGraph />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
