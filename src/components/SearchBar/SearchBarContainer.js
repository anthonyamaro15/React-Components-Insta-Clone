// You do not need to change any code in this file
import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ data, filteredData }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
    const filtered = data.filter(card => {
      if (card.username.includes(value)) {
        return card.username;
      } else {
        return null;
      }
    });
    if (filtered) {
      return filteredData(filtered);
    }
  };

  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          name="value"
          value={value}
          onChange={handleChange}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
