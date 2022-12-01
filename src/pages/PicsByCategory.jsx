import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Picture from "../components/Picture";
import {
  categoryLoadingSelector,
  getSelectedCategory,
  pageSelector,
  selectedCategorySelector,
  setNextPage,
  setPreviousPage,
} from "../redux/slices/categorySlice";

function PicsByCategory() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const pics = useSelector(selectedCategorySelector);
  const page = useSelector(pageSelector);
  const loading = useSelector(categoryLoadingSelector);
  useEffect(() => {
    dispatch(
      getSelectedCategory({
        limit: 10,
        page,
        catId: categoryId,
      })
    );
  }, [categoryId, page, dispatch]);
  const handleNextPage = () => {
    dispatch(setNextPage());
  };
  const handlePreviousPage = () => {
    dispatch(setPreviousPage());
  };
  return loading ? (
    <Loading />
  ) : (
    <div id="home">
      <div className="mainPics">
        {pics?.map((picture) => (
          <Picture key={picture.id} picture={picture} />
        ))}
      </div>
      <div className="nextOrPrev">
        <button
          className="nextBtn"
          onClick={handleNextPage}
          disabled={page === 10}
        >
          NEXT{" "}
        </button>
        <button
          className="nextBtn"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          PREVIOUS{" "}
        </button>
      </div>
    </div>
  );
}

export default PicsByCategory;
