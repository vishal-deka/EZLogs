import React from "react";
import "./SideMenu.css";
import AddIcon from "@mui/icons-material/Add";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import PageviewIcon from "@mui/icons-material/Pageview";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <div className="menu">
        <ul className="menuitems">
          <Link to="/" style={{ textDecoration: "none" }} className="link">
            <li className="item">
              <HomeIcon className="icon" /> Home
            </li>
          </Link>
          <Link
            to="/papers"
            style={{ textDecoration: "none" }}
            className="link"
          >
            <li className="item">
              <PageviewIcon className="icon" /> View Papers
            </li>
          </Link>
          <Link to="/add" className="link">
            <li className="item">
              <AddIcon className="icon" /> Add Paper
            </li>
          </Link>
          <li className="item">
            <BarChartIcon className="icon" /> Analytics
          </li>

          <li className="item">
            <HelpIcon className="icon" /> Help
          </li>
        </ul>
      </div>
    </div>
  );
}
