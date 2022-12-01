import React from "react";
import { NavLink } from "react-router-dom";
import "../style/style.css";
function OneCategory({ category }) {
  const { id, name } = category;
  return (
    <NavLink
      className="categoryName"
      to={`categories/${id}`}
      style={({ isActive }) =>
        isActive ? { color: "blue" } : { color: "black" }
      }
    >
      {name}
    </NavLink>
  );
}

export default OneCategory;

//  <p >{name}</p>
