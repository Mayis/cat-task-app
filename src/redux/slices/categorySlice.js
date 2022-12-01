import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryURL, mainURL } from "../../helper/api";
import request from "../../helper/request";

const initialState = {
  loading: false,
  categories: null,
  selectedCategory: null,
  error: false,
  page: 1,
};
// request for getting categories names and id
export const getCategories = createAsyncThunk(
  "category/getCategory",
  async () => {
    return request(categoryURL).then((resp) => resp);
  }
);
// request for getting selected category
export const getSelectedCategory = createAsyncThunk(
  "category/getSelectedCategory",
  async ({ limit, page, catId }) => {
    return request(mainURL, limit, page, catId).then((resp) => resp);
  }
);
// all about categoris
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setNextPage(state) {
      state.page += 1;
    },
    setPreviousPage(state) {
      state.page -= 1;
    },
  },
  extraReducers: {
    // get categories
    [getCategories.pending](state) {
      state.loading = true;
    },
    [getCategories.fulfilled](state, { payload }) {
      state.categories = payload;
      state.loading = false;
    },
    [getCategories.rejected](state) {
      state.error = true;
    },
    // get selected categoris
    [getSelectedCategory.pending](state) {
      state.loading = true;
    },
    [getSelectedCategory.fulfilled](state, { payload }) {
      state.selectedCategory = payload;
      state.loading = false;
    },
    [getSelectedCategory.rejected](state) {
      state.error = true;
    },
  },
});
export default categorySlice.reducer;
export const { setNextPage, setPreviousPage } = categorySlice.actions;
export const categoriesSelector = (state) => state.category.categories;
export const selectedCategorySelector = (state) =>
  state.category.selectedCategory;
export const categoryLoadingSelector = (state) => state.category.loading;
export const pageSelector = (state) => state.category.page;
