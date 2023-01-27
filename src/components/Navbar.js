import React from "react";

const Navbar = () => {
  return (
    <div
      className="container d-flex justify-content-between mt-3"
      style={{ maxHeight: "37px" }}
    >
      <div className="d-flex justify-content-center">
        <a
          className="nav-link me-2"
          aria-current="page"
          href="https://wallids.com/"
        >
          Dashboard
        </a>
        <a className="nav-link me-2" href="https://wallids.com/">
          <i className="bi bi-graph-up">Security Features</i>
        </a>
        <a className="nav-link me-2" href="https://wallids.com/">
          <i className="bi bi-gear" /> Settings
        </a>
        <a className="nav-link" href="https://wallids.com/">
          <i className="bi bi-question-circle" /> Support
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <a
          className="nav-link"
          aria-current="page"
          href="https://wallids.com/"
          style={{ width: "155px" }}
        >
          <i className="bi bi-grid-3x3-gap" /> All Apps
        </a>

        <select className="form-select" aria-label="Default select example">
          <option value="0">domainname.com</option>
          <option value="1">domainOne.com</option>
          <option value="2">domainTwo.com</option>
          <option value="3">domainThree.com</option>
        </select>

        <button className="btn btn-primary ms-3" style={{ width: "255px" }}>
          Check My Service
        </button>
      </div>
    </div>
  );
};

export default Navbar;
