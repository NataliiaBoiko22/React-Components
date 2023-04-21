import "./Modal.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { IProducts } from "../../components/types";
import { MouseEventHandler } from "react";
import React from "react";
interface IModalProps extends IProducts {
  id: number;
  handleModalClick: MouseEventHandler<HTMLDivElement>;
  handleCloseClick: MouseEventHandler<HTMLDivElement>;
}

export const Modal = (props: IModalProps) => {
  const { smallError, smallLoading } = useSelector(
    (state: RootState) => state.curState
  );

  return (
    <div className="modal">
      <div className="modal-overlay" />
      {!smallError && !smallLoading && (
        <div className="modal-card" onClick={props.handleModalClick}>
          <div className="modal-close">
            <div className="modal-closeBtn" onClick={props.handleCloseClick}>
              X
            </div>
          </div>
          <div className="modal-content">
            <div className="modal-img">
              <img src={props?.images[0]} alt="product" />
            </div>
            <div className="card-title">Title: {props?.title}</div>
            <div className="card-info">Brand: {props?.brand}</div>
            <div className="card-info">Description: {props?.description}</div>
            <div className="card-info">Category: {props?.category}</div>
            <div className="card-price">Price: ${props?.price}</div>
          </div>
        </div>
      )}
      {smallError && <div className="error">{smallError}</div>}
      {smallLoading && <div>Loading...</div>}
    </div>
  );
};
