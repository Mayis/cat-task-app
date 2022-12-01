import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Picture from "../components/Picture";
import {
  getMainPics,
  homePageLoadingSelector,
  picsSelector,
} from "../redux/slices/mainSlice";
import "../style/style.css";
function Home() {
  const pics = useSelector(picsSelector);
  const loading = useSelector(homePageLoadingSelector);
  const dispatch = useDispatch();
  console.log(loading);
  useEffect(() => {
    dispatch(getMainPics());
  }, [dispatch]);

  return loading ? (
    <Loading />
  ) : (
    <div id="home">
      <div className="mainPics">
        {pics?.map((picture) => (
          <Picture key={picture.id} picture={picture} />
        ))}
      </div>
    </div>
  );
}

export default Home;
