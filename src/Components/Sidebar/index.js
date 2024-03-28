import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineWebAsset } from "react-icons/md";
import "./index.css";
const Sidebar = () => {
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
      <div>
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
        <Link to="/">
          <button
            className={
              activeRoute === "home"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            }
            value="home"
            onClick={handleAll}
          >
            Home <FaHome />
          </button>
        </Link>

        <Link to="/cryptocurrency">
          <button
            className={
              activeRoute === "cryptocurrency"
                ? "activeBtn"
                : "notActiveBtn hover-element"
            }
            value="cryptocurrency"
            onClick={handleAll}
          >
            cryptocurrency <SiHiveBlockchain />
          </button>
        </Link>

        <Link to="/populationgraph">
          <button
            className={
              activeRoute === "populationgraph"
                ? "activeBtn"
                : "notActiveBtn hover-element"
            }
            value="populationgraph"
            onClick={handleAll}
          >
            PopulationGraph <SlGraph />
          </button>
        </Link>
        <Link to="/Web">
          <button
            className={
              activeRoute === "Web"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            }
            value="Web"
            onClick={handleAll}
          >
            Web <MdOutlineWebAsset />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
