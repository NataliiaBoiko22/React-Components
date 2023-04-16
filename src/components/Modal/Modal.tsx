import { Api } from "../../Api/Api";
import "./Modal.css";

interface IModalProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, id }: IModalProps) => {
  const {
    data: product,
    error,
    isLoading,
  } = Api.useFetchSingleProductQuery(id, { skip: !id });

  const renderModalContent = () => {
    if (error) {
      return <div>Some error.</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <div className="modal-img">
          <img src={product?.images[0]} alt="product" />
        </div>
        <div className="card-title">Title: {product?.title}</div>
        <div className="card-info">Brand: {product?.brand}</div>
        <div className="card-info"> Description: {product?.description} </div>
        <div className="card-info">Category: {product?.category}</div>
        <div className="card-price">Price: ${product?.price}</div>
      </>
    );
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-overlay" />
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close">
          <button className="modal-closeBtn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">{renderModalContent()}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
