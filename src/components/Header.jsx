import React from "react";
import Categories from "./Categories";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
function Header() {
  const navigate = useNavigate();
  const forwardToHome = () => {
    navigate("/");
  };
  return (
    <div id="header">
      <h1 className="homeBtn" onClick={forwardToHome}>
        HOME
      </h1>
      <Categories />
    </div>
  );
}

export default Header;
