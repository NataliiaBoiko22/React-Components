import { useEffect } from "react";
import "./main.css";
import { IProducts } from "../../types";
import Card from "../Card/Card";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchProducts } from "../../../Api/Api";

export const Main = () => {
  const { products, error, loading, searchText } = useSelector(
    (state: RootState) => state.curState
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts(searchText));
  }, [dispatch]);
  console.log(fetchProducts(searchText));
  return (
    <div className="main" data-testid="main">
      {Array.isArray(products) &&
        !loading &&
        products.map((doc: IProducts) => <Card key={doc.id} {...doc} />)}
      {loading && <div className="error">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
};
