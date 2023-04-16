import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Api } from "../Api/Api";
import formReducer from "../redux/formSlice";
import searchReducer from "../redux/searchSlice";

const rootReducer = combineReducers({
  formReducer,
  searchReducer,
  [Api.reducerPath]: Api.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(Api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppSore = ReturnType<typeof setupStore>;
export type AppDispatch = AppSore["dispatch"];
