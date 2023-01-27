import React from "react";
import wallids_logo from "../imgs/wallids_logo.png";
import SearchBar from "./SearchBar.js";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const user = {
    name: "Tarik",
    lastName: "Agridag",
    position: "Developer",
  };

  return (
    <div className="main-header">
      <div className="container-lg d-flex justify-content-between align-items-center">
        <span className="d-flex justify-content-between align-items-center">
          <a href="https://wallids.com/">
            <img src={wallids_logo} alt="wallids_logo" />
          </a>
          <h2>wallids</h2>
        </span>
        <SearchBar />
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" style={{ height: "2.5rem" }}>
            Enterprise
          </button>

          <span className="d-flex justify-content-center align-items-center border-mail">
            {" "}
            <MailOutlinedIcon />
          </span>

          <div
            className="d-flex justify-content-between"
            style={{ width: "185px" }}
          >
            <p className="avatar-bg">{user.name.split("")[0]}</p>
            <div className="flex-column">
              <h6 className="text">
                {user.name} {user.lastName}
              </h6>
              <p style={{ fontSize: "10px" }}>{user.position}</p>
            </div>
            <a href="https://wallids.com/">
              <KeyboardArrowDownIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
