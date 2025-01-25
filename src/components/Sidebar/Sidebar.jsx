import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaLink, FaChartBar, FaCog } from "react-icons/fa";
import cuvette from "../../assets/cuvette.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="cuvette-image" src={cuvette} />
      <div className="dash">
      <ul>
        <li>
          <Link to="/home/dashboard">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/home/links">
            <FaLink /> Links
          </Link>
        </li>
        <li>
          <Link to="/home/analytics">
            <FaChartBar /> Analytics
          </Link>
        </li>
      </ul>
      </div>
      <div className="setting">
        <ul>
          <li>
            {" "}
            <Link to="/home/settings">
              <FaCog /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
