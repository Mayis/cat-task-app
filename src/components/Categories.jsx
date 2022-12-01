import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoriesSelector,
  getCategories,
} from "../redux/slices/categorySlice";
import OneCategory from "./OneCategory";
import "../style/style.css";
function Categories() {
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  console.log(categories);
  return (
    <div id="categories">
      {categories?.map((cat) => (
        <OneCategory category={cat} key={cat.id} />
      ))}
    </div>
  );
}

export default Categories;
