import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { fetchProducts, fetchSingleProduct } from "../Api/Api";
import { IProducts } from "../components/types";
import { IUser } from "../components/types";
interface IState {
  products: IProducts[] | null;
  error: string | null;
  searchText: string;
  smallError: string | null;
  loading: boolean;
  smallLoading: boolean;
  curProduct: IProducts | null;
  userCards: IUser[];
}

const initialState: IState = {
  products: null,
  error: null,
  searchText: "",
  smallError: null,
  loading: false,
  smallLoading: false,
  curProduct: null,
  userCards: [],
};

export const searchSlice: Slice<
  IState,
  SliceCaseReducers<IState>,
  "products"
> = createSlice({
  name: "products",
  initialState,
  reducers: {
    addUserCard(state, action: PayloadAction<IUser>) {
      state.userCards.push(action.payload);
    },
    changeSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, { error }) => {
      if (error.message) state.error = error.message;
      state.loading = false;
    });
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.smallLoading = true;
      state.smallError = null;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
      state.curProduct = payload;
      state.smallLoading = false;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, { error }) => {
      if (error.message) state.smallError = error.message;
      state.smallLoading = false;
    });
  },
});

export const { addUserCard, changeSearchText } = searchSlice.actions;
export default searchSlice.reducer;
