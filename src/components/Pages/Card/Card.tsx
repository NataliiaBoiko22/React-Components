import { IProducts } from "../../types";
import { Modal } from "../../Modal/Modal";
import "./card.css";
import { fetchSingleProduct } from "../../../Api/Api";
import { store } from "../../../redux/store";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { MouseEventHandler, useState } from "react";
import React from "react";

const Card = (props: IProducts) => {
  const [clicked, setClicked] = useState(false);

  const { curProduct } = store.getState().curState;
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseClick = () => setClicked(false);
  const handleModalClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (target.dataset.name === "close") setClicked(false);
  };
  const handleCardClick: MouseEventHandler<HTMLDivElement> = async (e) => {
    const target = e.target as HTMLDivElement;
    const id =
      target.dataset.name === "open" ? target.closest("section")?.id : null;
    if (target.dataset.name === "open") {
      if (id) dispatch(fetchSingleProduct(Number(id)));
      setClicked(true);
    }
  };
  return (
    <div
      className="card-item"
      onClick={handleCardClick}
      id={props.id.toString()}
    >
      <div className="additional-wrapper">
        <div className="card-img">
          <img src={props.images[0]} alt="product" />
        </div>
        <div className="title"> {props.title}</div>
        {clicked && (
          <Modal
            handleModalClick={handleModalClick}
            handleCloseClick={handleCloseClick}
            id={curProduct?.id || 0}
            title={curProduct?.title || ""}
            brand={curProduct?.brand || ""}
            description={curProduct?.description || ""}
            category={curProduct?.category || ""}
            price={curProduct?.price || 0}
            images={props.images}
            thumbnail={curProduct?.thumbnail || ""}
          />
        )}
      </div>
    </div>
  );
};
export default Card;
