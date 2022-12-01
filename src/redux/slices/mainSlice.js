import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainURL } from "../../helper/api";
import request from "../../helper/request";

const initialState = {
  loading: false,
  pics: null,
  error: false,
  page: 1,
};
// getting pictures for home page
export const getMainPics = createAsyncThunk(
  "main/getMainPics",
  async (limit = 10, page = 1) => {
    return request(mainURL, limit, page).then((resp) => resp);
  }
);
// home page slice
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {
    [getMainPics.pending](state) {
      state.loading = true;
    },
    [getMainPics.fulfilled](state, { payload }) {
      state.pics = payload;
      state.loading = false;
    },
    [getMainPics.rejected](state) {
      state.error = true;
    },
  },
});

export default mainSlice.reducer;
export const homePageLoadingSelector = (state) => state.main.loading;
export const picsSelector = (state) => state.main.pics;
