import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../components/types";

type FetchData = {
  products: IProducts[];
};

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<FetchData, string>({
      query: (text) => {
        if (text !== "") {
          return `/products/search?q=${text.toLowerCase()}`;
        }
        return "/products";
      },
    }),
    fetchSingleProduct: builder.query<IProducts, number>({
      query: (id) => {
        return `/products/${id}`;
      },
    }),
  }),
});

export const { useFetchProductsQuery } = Api;
