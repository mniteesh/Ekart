import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <div className="topIconBadge">2</div>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <div className="topIconBadge">2</div>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://i.pinimg.com/564x/78/e0/01/78e0011021b991cf8088592ce22dac08.jpg"
            alt="avtar"
            className="topAvtar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
