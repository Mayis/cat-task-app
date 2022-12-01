import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import mainSlice from "./slices/mainSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    main: mainSlice,
  },
});

export default store;
