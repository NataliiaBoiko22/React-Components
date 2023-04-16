import { useState } from "react";
import { IProducts } from "../../types";
import Modal from "../../Modal/Modal";
import "./card.css";

interface IProps {
  item: IProducts;
}
const Card = (product: IProps) => {
  const { title, images, id } = product.item;
  const [isModalOpen, setModalState] = useState(false);
  const [modalID, setModalID] = useState(0);

  const toggleModal = () => {
    setModalID(id);
    setModalState(!isModalOpen);
  };

  return (
    <div className="card-item" onClick={() => toggleModal()}>
      <div className="card-img">
        <img src={images[0]} alt="product" />
      </div>
      <div className="title"> {title}</div>
      <Modal id={modalID} isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};
export default Card;
