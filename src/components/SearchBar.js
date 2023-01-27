import React from "react";

const SearchBar = () => {
  return (
    <div style={{ width: "25rem" }}>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="&#xF002; All apps search"
          style={{ fontFamily: "Arial, FontAwesome" }}
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
