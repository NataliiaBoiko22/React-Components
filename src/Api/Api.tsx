import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProducts } from "../components/types";

export const fetchProducts = createAsyncThunk<IProducts[], string>(
  "products/fetchProducts",
  async (text) => {
    const response = await fetch(
      text !== ""
        ? `https://dummyjson.com/products/search?q=${text.toLowerCase()}`
        : "https://dummyjson.com/products"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    console.log(data.products);
    return data.products;
  }
);

export const fetchSingleProduct = createAsyncThunk<IProducts, number>(
  "products/fetchSingleProduct",
  async (id: number) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data.products[0];
  }
);
