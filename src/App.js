import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PicsByCategory from "./pages/PicsByCategory";
import Home from "./pages/Home";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<PicsByCategory />}>
            <Route path=":categoryId" element={<PicsByCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
